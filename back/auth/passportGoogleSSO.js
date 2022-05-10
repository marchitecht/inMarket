const passport = require('passport');
const userController = require('../controllers/user-controller');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../db/models');
const UserDto = require('../dtos/user-dto');
const tokenService = require('../services/token-service');

const GOOGLE_CALLBACK_URL = `${process.env.BACK_URL}/api/v1/auth/google/callback`;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        firstName: `${profile.name.givenName}`,
        lastName: `${profile.name.familyName}`,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        googleId: profile.id,
        isActivated: true,
      };
      console.log(defaultUser);
      const user = await User.findOrCreate({
        where: { googleId: profile.id },
        defaults: { ...defaultUser },
      })
        .catch((err) => {
          console.log('Problem signing in', err);
          cb(err, null);
        });
      if (user[0]) return cb(null, user[0]);
    },
  ),
);

passport.serializeUser(async (user, cb) => {
  console.log('user-->', user.dataValues);
  const userDto = await new UserDto({ ...user.dataValues });
  const tokens = await tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  const userData = {
    ...tokens,
    ...userDto,

  };
  console.log(userDto.id);

  console.log('serializing user', user);
  cb(null, userDto);
});
passport.deserializeUser(async ({ id }, cb) => {
  const userInDb = await User.findOne({ where: { id } })
    .catch((err) => {
      console.log('Error deserializing', err);
      cb(err, null);
    });
  if (userInDb) {
    await userController.refresh();
    // const userDto = await new UserDto({ ...userInDb.dataValues });

    // console.log('Deserialized user', userData);
    // cb(null, userData);
  }
});
