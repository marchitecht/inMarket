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

  async getCategory(req, res, next) {
    try {
      let { categoryName } = req.params;
      console.log('reqparams', categoryName);
      switch (categoryName) {
        case 'vegetables':
          categoryName = 'Овощи';
          break;
        case 'fruits':
          categoryName = 'Фрукты';
          break;
        case 'berries':
          categoryName = 'Ягоды';
          break;
        case 'bread':
          categoryName = 'Хлеб';
          break;

        default:
          break;
      }
      console.log('categoryNAME ---->>>', categoryName);
      const categoryId = await productService.getCategoryId(categoryName, 'Category');
      console.log('categoryID -->', categoryId);
      const category = await productService.getCategory(+categoryId);
      res.json({ subcategories: [...category], currentCategory: { categoryId, categoryName } });
    } catch (error) {
      next(error);
    }
  }

  async getProducts(req, res, next) {
    try {
      const { subCategoryId } = req.params;
      const products = await productService.getProducts(subCategoryId);
      res.json({ products });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductController();
