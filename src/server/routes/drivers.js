import DriversController from '../controllers/drivers';
import callback from '../utils/callbackRoutes';

export default (app) => {

  const driversController = new DriversController(app.datasource.models.Drivers);
  const vehicle = app.datasource.models.Vehicles;

  app.route('/driversByCodigo/:cod')
    .all(app.auth.authenticate())
    .get((req,res) => {
      driversController.getAllByCodigo(req.params.cod)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
        .catch(error => {
          console.log('Erro ao buscar por código: ',error);
        })
    })
  
  app.route('/driversWithJoin')
    .all(app.auth.authenticate())
    .get((req, res) => {
        driversController.listAllWithJoin(vehicle)
          .then(response => callback.defaultResponse(response, req, res))
          .catch(error => callback.defaultError(error, req, res))
    });

  app.route('/drivers')
    .all(app.auth.authenticate())
    .get((req,res) => {
      driversController.listAll()
        .then(response => callback.defaultResponse(response , req ,res ))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .post((req,res) => {
      driversController.create(req.body)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });

  app.route('/drivers/:id')
    .all(app.auth.authenticate())
    .get((req,res) => {
      driversController.getById(req.params)
        .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .put((req,res) => {
      driversController.update(req.body,req.params)
       .then(response => callback.defaultResponse(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    })
    .delete((req,res) => {
      driversController.remove(req.params)
        .then(response => callback.defaultRemove(response , req ,res))
        .catch(error => callback.defaultError(error , req ,res))
    });
}
