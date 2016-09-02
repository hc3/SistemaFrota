import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import datasource from './config/datasource';
import driversRouter from './routes/drivers';
import vehiclesRouter from './routes/vehicles';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port',7000);
app.use(bodyParser.json());
driversRouter(app);
vehiclesRouter(app);


export default app;
