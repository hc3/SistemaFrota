import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import driversRouter from './routes/drivers';
import vehiclesRouter from './routes/vehicles';
import tiresRouter from './routes/tires';
import path from 'path';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port',7000);
app.use(express.static(path.join(__dirname , '../client/')));
app.use(bodyParser.json());
//app.use(express.logger());

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname , '../client/index.html'));
});

driversRouter(app);
vehiclesRouter(app);
tiresRouter(app);


export default app;
