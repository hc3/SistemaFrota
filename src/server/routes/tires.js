import TiresController from '../controllers/tires';
import callback from '../utils/callbackRoutes';

export default (app) => {

  const vehicle = app.datasource.models.Vehicles;
  const tiresController = new TiresController(app.datasource.models.Tires);

  app.route('/tiresWithJoin')
    .all(app.auth.authenticate())
    .get((req, res) => {
      tiresController.listAllWithJoin(vehicle)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/tiresByCodigo/:cod')
    .all(app.auth.authenticate())
    .get((req, res) => {
      tiresController.listAllByCod(req.params.cod)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
        .catch(error => {
          console.log('Erro ao acessar busca por Cod', error);
        });
    });

  app.route('/tiresWithJoin/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      tiresController.getByIdWithJoin(req.params, vehicle)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });


  app.route('/tires')
    .all(app.auth.authenticate())
    .get((req, res) => {
      tiresController.listAll()
        .then(response => callback.defaultResponse(response , req ,res ))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .post((req, res) => {
      tiresController.create(req.body)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });

  app.route('/tires/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      tiresController.getById(req.params)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .put((req, res) => {
      tiresController.update(req.body, req.params)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .delete((req, res) => {
      tiresController.remove(req.params)
        .then(response => callback.defaultRemove(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });
}