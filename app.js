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

export default app;
