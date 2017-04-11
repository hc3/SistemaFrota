import VehicleController from '../controllers/vehicles';
import callback from '../utils/callbackRoutes';

export default (app) => {

  const veiculo = app.datasource.models.Vehicles;
  const driver = app.datasource.models.Drivers;
  const vehicleController = new VehicleController(veiculo);

  app.route('/vehiclesJoin')
    .all(app.auth.authenticate())
    .get((req, res) => {
      vehicleController.listAllWithJoin(driver)
        .then(response => {
          res.status(response.statusCode)
          res.json(response.data);
        });
    });

  app.route('/vehicleByPlaca/:placa')
    .all(app.auth.authenticate())
    .get((req, res) => {
      vehicleController.listAllByPlaca(req.params.placa)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
        .catch(error => {
          console.log('Erro ao acessar busca por Placa', error);
        });
    });

  app.route('/vehicleOneJoin/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      vehicleController.getByIdWithJoin(req.params, driver)
        .then(response => {
          res.status(response.statusCode)
          res.json(response.data);
        });
    });

  app.route('/vehicles')
    //.all(app.auth.authenticate())
    .get((req, res) => {
      vehicleController.listAll()
        .then(response => callback.defaultResponse(response, req, res))
        .catch(error => callback.defaultError(error, req, res))
    })
    .post((req, res) => {
      vehicleController.create(req.body)
        .then(response => callback.defaultResponse(response, req, res))
        .catch(error => callback.defaultError(error, req, res))
    });

  app.route('/vehicles/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      vehicleController.getById(req.params)
        .then(response => callback.defaultResponse(response, req, res))
        .catch(error => callback.defaultError(error, req, res))
    })
    .put((req, res) => {
      vehicleController.update(req.body, req.params)
        .then(response => callback.defaultResponse(response, req, res))
        .catch(error => callback.defaultError(error, req, res))
    })
    .delete((req, res) => {
      vehicleController.remove(req.params)
        .then(response => callback.defaultResponse(response, req, res))
        .catch(error => callback.defaultError(error, req, res))
    });
}