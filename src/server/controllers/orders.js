import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class OrdersController extends AbstractController {

    constructor(Order) {
        super(Order);
        this.Order = Order;
    };

    createOrder(data) {
        /*
        data.products.map((product) => {
            this.Order.addProducts(product);
            console.log(this.Order);
        });
        */
        //this.Order.addProducts(data.products);
        Object.keys(this.Order).forEach(function(name) {
            console.log(name);
        })
        return this.Order.create(data)
            .then(result => callback.defaultResponse(result, httpStatus.CREATED))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    };

}

export default OrdersController;