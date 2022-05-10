const ApiError = require('../exceptions/api-error');
const { Category } = require('../db/models');

class ProductService {
  async getCategories() {
    try {
      const categories = await Category.findAll();
      if (categories.length === 0) throw ApiError.BadRequest('Ошибка при получении категорий');
      else return categories;
    } catch (error) {
      throw ApiError.BadRequest('Ошибка при получении категорий.');
    }
  }
}

module.exports = new ProductService();
