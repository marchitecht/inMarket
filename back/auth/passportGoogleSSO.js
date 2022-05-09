const passport = require('passport');
const DtoUser = require('../dtos/user-dto');
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

      const user = await User.findOrCreate({
        where: { googleId: profile.id },
        defaults: { ...defaultUser },
      })
        .catch((err) => {
          console.log('Problem signing in', err);
          cb(err, null);
        });
      const dtoUser = new DtoUser(defaultUser);
      console.log(dtoUser);
      console.log(user);
      if (user && user[0]) return cb(null, user && user[0]);
    },
  ),
);

passport.serializeUser(async (user, cb) => {
  console.log('user-->', user.dataValues);
  const userDto = await new UserDto({ ...user.dataValues });
  console.log(userDto.id);
  const tokens = await tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  const userData = {
    ...tokens,
    ...userDto,
  };
  console.log('serializing user', user);
  cb(null, userData);
});
passport.deserializeUser(async ({ id }, cb) => {
  const userInDb = await User.findOne({ where: { id } })
    .catch((err) => {
      console.log('Error deserializing', err);
      cb(err, null);
    });
  if (userInDb)cb(null, userInDb);
  console.log('Deserialized user', userInDb);
});
