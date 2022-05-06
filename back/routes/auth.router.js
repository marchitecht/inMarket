const router = require('express').Router();
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const upload = require('../middlewares/upload.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router.route('/signup')
  .get().post(upload.single('img'), body('email').isEmail(), body('password').isLength({ min: 8, max: 16 }), userController.signup);
router.route('/signin')
  .get().post(
    userController.signin,
  );
router.route('/logout')
  .get().post(
    userController.logout,
  );
router.route('/activate/:link')
  .get(userController.activate);
router.route('/refresh')
  .get(userController.refresh);
router.route('/usersTest')
  .get(authMiddleware, userController.usersTest);
module.exports = router;
