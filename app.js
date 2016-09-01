import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port',7000);
app.use(bodyParser.json());
console.log(app.datasource.models);
const Drivers = app.datasource.models.Drivers;

// ROUTES DRIVERS
app.route('/drivers')
  .get((req,res) => {
    Drivers.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(412))
  })
  .post((req,res) => {
    Drivers.create(req.body)
      .then(result => res.json(result))
      .catch(err => err.status(412))
  });

app.route('/drivers/:id')
  .get((req,res) => {
    Drivers.findOne({where:req.params})
      .then(result => res.json(result))
      .catch(err => err.status(412))
  })
  .put((req,res) => {
    Drivers.update(req.body,{where:req.params})
      .then(result => res.json(result))
      .catch(err => err.status(412))
  })
  .delete((req,res) => {
    Drivers.destroy({where:req.params})
      .then(result => res.sendStatus(204))
      .catch(err => err.status(412))
  });


//ROUTES TIRE
export default app;
