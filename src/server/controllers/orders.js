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
            this.Order.setProducts(product)
                .then(() => console.log('salved'));
            //console.log(this.Order);
        });
        */
        Object.keys(this.Order).forEach(function(name) {
            console.log(name);
        })
        console.log('associate: ',this.Order.getProducts());
        //this.Order.addProducts(data.products);
        return this.Order.create(data)
            .then(result => callback.defaultResponse(result, httpStatus.CREATED))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    };

}

export default OrdersController;