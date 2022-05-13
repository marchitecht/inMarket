const router = require('express').Router();
const vendorController = require('../controllers/vendor-controller');
const upload = require('../middlewares/upload.middleware');

router.route('/menu/new').post(upload.single('img'), vendorController.addNewProduct);

module.exports = router;
