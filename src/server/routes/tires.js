import TiresController from '../controllers/tires';

export default (app) => {

  const tiresController = new TiresController(app.datasource.models.Tires);

  app.route('/tires')
    .get((req,res) => {
      tiresController.listAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .post((req,res) => {
      tiresController.create(req.body)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    });

  app.route('/tires/:id')
    .get((req,res) => {
      tiresController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .put((req,res) => {
      tiresController.update(req.body,req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        })
    })
    .delete((req,res) => {
      tiresController.remove(req.params)
        .then(response => {
          res.sendStatus(response.statusCode);
        })
    })
}
