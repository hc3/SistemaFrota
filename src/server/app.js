import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import driversRouter from './routes/drivers';
import vehiclesRouter from './routes/vehicles';
import tiresRouter from './routes/tires';

const app = express();
app.config = config;
app.datasource = datasource(app);

app.set('port',7000);
app.use(express.static(__dirname + '../../src/client'));
app.use(bodyParser.json());

driversRouter(app);
vehiclesRouter(app);
tiresRouter(app);


export default app;
