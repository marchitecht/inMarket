const router = require('express').Router();
const passport = require('passport');

const successLoginUrl = 'http://localhost:3000/login/success';
const errorLoginUrl = 'http://localhost:3000/login/error';


// http://localhost:5000/api/v1/login/google
router.get('/login/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));
router.get('/auth/google/callback', passport.authenticate('google', {
  failureMessage: 'Cannot login to Google',
  failureRedirect: errorLoginUrl,
  successRedirect: successLoginUrl,
}), (req, res) => {
  console.log('User', req.user);
  res.send('thank you for signin in!');
});
module.exports = router;
