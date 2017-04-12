import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class OrdersController extends AbstractController {
    
    constructor(Order) {
        super(Order);
        this.Order = Order;
    };

}

export default OrdersController;