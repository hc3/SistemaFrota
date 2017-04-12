import ProductController from '../controllers/products';
import callback from '../utils/callbackRoutes';

export default (app) => {

  const Product = app.datasource.models.Products;
  const productController = new ProductController(Product);

  app.route('/ProductByCodigo/:cod')
    .all(app.auth.authenticate())
    .get((req, res) => {
      productController.listAllByCod(req.params.cod)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
        .catch(error => {
          console.log('Erro ao acessar busca por Cod', error);
        });
    });


  app.route('/products')
    .all(app.auth.authenticate())
    .get((req, res) => {
      productController.listAll()
        .then(response => callback.defaultResponse(response , req ,res ))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .post((req, res) => {
      productController.create(req.body)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });

  app.route('/products/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      productController.getById(req.params)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .put((req, res) => {
      productController.update(req.body, req.params)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .delete((req, res) => {
      productController.remove(req.params)
        .then(response => callback.defaultRemove(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });
}