const passport = require('passport');
const DtoUser = require('../dtos/user-dto');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { User } = require('../db/models');

const GOOGLE_CALLBACK_URL = 'http://localhost:5000/api/v1/auth/google/callback';

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

passport.serializeUser((user, cb) => {
  console.log('serializing user', user);
  cb(null, user.id);
});
passport.deserializeUser(async (id, cb) => {
  const user = await User.findOne({ where: { id } })
    .catch((err) => {
      console.log('Error deserializing', err);
      cb(err, null);
    });
  console.log('Deserialized user', user);
  if (user)cb(null, user);
});
