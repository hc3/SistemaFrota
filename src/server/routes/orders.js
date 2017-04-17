import OrderController from '../controllers/orders';
import callback from '../utils/callbackRoutes';

export default (app) => {

    const Order = app.datasource.models.Orders;
    const Vehicle = app.datasource.models.Vehicles;
    const Product = app.datasource.models.Order_Products;

    const orderController = new OrderController(Order);

    app.route('/orders')
        //.all(app.auth.authenticate())
        .get((req, res) => {
            orderController.listWithJoin(Vehicle, Product)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .post((req, res) => {
            orderController.createOrder(req.body)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })

    app.route('/orders/:id')
        .all(app.auth.authenticate())
        .get((req, res) => {
            orderController.getById(req.params)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .put((req, res) => {
            orderController.update(req.body, req.params)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .delete((req, res) => {
            orderController.remove(req.params)
                .then(response => callback.defaultRemove(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        });
}