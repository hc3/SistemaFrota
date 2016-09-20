import express from 'express';
import bodyParser from 'body-parser';
import authorization from './auth';
import config from './config/config';
import datasource from './config/datasource';
import driversRouter from './routes/drivers';
import vehiclesRouter from './routes/vehicles';
import tiresRouter from './routes/tires';
import usersRoutes from './routes/users';
import authRouter from './routes/auth';
import path from 'path';

const app = express();

app.config = config;
app.datasource = datasource(app);

app.set('port',7000);
app.use(express.static(path.join(__dirname , '../client/')));
//app.use(express.static(path.join(__dirname , '../../dist/build.js')));
const auth = authorization(app);

app.use(bodyParser.json());
app.use(auth.initialize());
app.auth = auth;

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname , '../client/index.html'));
});

authRouter(app);
driversRouter(app);
vehiclesRouter(app);
tiresRouter(app);
usersRoutes(app);



export default app;
