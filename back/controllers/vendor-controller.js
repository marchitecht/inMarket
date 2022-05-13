/* eslint-disable max-len */
const vendorService = require('../services/vendor-service');

class VendorController {
  async addNewProduct(req, res, next) {
    try {
      console.log('INBACK');
      const { subCategoryId, userId, image } = req.body;
      console.log(req.files);
      const addedProduct = await vendorService.addProduct({
        subCategoryId,
        userId,
        image,
      });
      res.json(addedProduct);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VendorController();
