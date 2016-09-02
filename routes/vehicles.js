import VehicleController from '../controllers/vehicles';

export default (app) => {

  const veiculo = app.datasource.models.Vehicles;
  const driver = app.datasource.models.Drivers;
  const vehicleController = new VehicleController(veiculo,driver);

  app.route('/vehicles')
    .get((req,res) =>{
      vehicleController.listAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req,res) => {
      vehicleController.create(req.body)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/vehicles/:id')
    .get((req,res) => {
      vehicleController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .put((req,res) => {
      vehicleController.update(req.body,req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .delete((req,res) => {
      vehicleController.remove(req.params)
        .then(response => {
          res.sendStatus(response.statusCode);
        });
    });
}
