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
            this.Order.addProducts(product)
                .then(() => console.log('salved'));
            //console.log(this.Order);
        });
        */
        Object.keys(this.Order).forEach(function(name) {
            console.log(name);
        })
        //console.log('associate: ',this.Order.getProducts());
        //this.Order.addProducts(data.products);
        //console.log(data.products);
       
            //console.log(data);
        //this.Order.addOrder_Products(dt);
    
        return this.Order.create(data)
            .then(result => callback.defaultResponse(result, httpStatus.CREATED))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    };

    listWithJoin(vehicle, product) {
        return this.Order.findAll({
                include: [{
                        model: vehicle
                    },
                    {
                        model: product
                    }
                ]
            })
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message));
    }

}

export default OrdersController;