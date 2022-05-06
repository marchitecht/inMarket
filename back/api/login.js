// const router = require('express').Router();
// const jwt = require('jsonwebtoken');
// const { User } = require('../db/models');

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const userWithEmail = await User.findOne({ where: { email } })
//     .catch((err) => {
//       console.log('Error', err);
//     });
//   if (!userWithEmail) return res.json({ message: 'Email or password doesnt match' });
//   if (userWithEmail.password !== password) return res.json({ message: 'Email or pass doesnt match' });
//   const jwtToken = jwt.sign(
//     { id: userWithEmail.id, email: userWithEmail.email },
//     process.env.JWT_SECRET,
//   );
//   res.json({ message: 'Welcome', token: jwtToken });
// });
