import VehicleController from '../controllers/vehicles';

export default (app) => {

  const vehicleController = new VehicleController(app.datasource.models.Vehicles);

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
