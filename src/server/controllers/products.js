import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class ProductController extends AbstractController {

  constructor(Product) {
    super(Product);
    this.Product = Product;
  };

  listAllByCod(params) {
    return this.Product.findAll({
      where: {
        cod: params
      }
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };
  
}

export default ProductController;
