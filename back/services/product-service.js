const ApiError = require('../exceptions/api-error');
const {
  Category,
  Subcategory,
  Product,
} = require('../db/models');

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

  async getCategory(categoryId) {
    try {
      console.log('CATEGORY IN SERVISE --> ');
      const category = await Subcategory.findAll({
        where: {
          categoryId,
        },
        raw: true,
      });
      console.log('categoryINDB --->', category);
      if (category.length === 0) throw ApiError.BadRequest('Ошибка при получении подкатегорий категории');
      return category;
    } catch (error) {
      throw ApiError.BadRequest('Ошибка при получении подкатегорий категории');
    }
  }

  async getCategoryId(categoryName, model) {
    try {
      const table = (model === 'Category') ? Category : Subcategory;
      console.log('TABLE ->>>>', table);
      console.log('in CATEGORY ID', categoryName);
      const category = await table.findOne({
        where: {
          categoryName,
        },
      });
      console.log('categoryINID --> ', category);
      if (category) {
        return category.id;
      }
    } catch (error) {
      throw ApiError.BadRequest('Ошибка при получении имени категории/подкатегории');
    }
  }

  async getProducts(subCategoryId) {
    try {
      const products = await Product.findAll({
        where: {
          subCategoryId,
        },
        raw: true,
      });
      if (!products) {
        throw ApiError.BadRequest('Ошибка при получении продуктов');
      } else return products;
    } catch (error) {
      throw ApiError.BadRequest('Ошибка при получении продуктов');
    }
  }

  async addProduct(subCategoryId) {
    try {
      const products = await Product.findAll({
        where: {
          subCategoryId,
        },
        raw: true,
      });
      if (!products) {
        throw ApiError.BadRequest('Ошибка при получении продуктов');
      } else return products;
    } catch (error) {
      throw ApiError.BadRequest('Ошибка при получении продуктов');
    }
  }
}

module.exports = new ProductService();
