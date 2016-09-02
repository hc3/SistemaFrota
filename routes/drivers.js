import DriversController from '../controllers/drivers';

export default (app) => {

  const driversController = new DriversController(app.datasource.models.Drivers);

  app.route('/drivers')
    .get((req,res) => {
      driversController.listAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req,res) => {
      driversController.create(req.body)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    });

  app.route('/drivers/:id')
    .get((req,res) => {
      driversController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .put((req,res) => {
      driversController.update(req.body,req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req,res) => {
      driversController.remove(req.params)
        .then(response => {
          res.sendStatus(response.statusCode);
        });
    });
}
