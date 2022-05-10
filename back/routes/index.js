const router = require('express').Router();
const productController = require('../controllers/product-controller');

router.route('/').get(productController.getCategories);

module.exports = router;
