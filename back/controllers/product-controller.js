const productService = require('../services/product-service');

class ProductController {
  async getCategories(req, res, next) {
    try {
      const categories = await productService.getCategories();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
