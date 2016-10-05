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
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(express.static(path.join(__dirname , '../client/app/login/login.html')));
//app.use(express.static(path.join(__dirname , '../../dist/build.js')));
const auth = authorization(app);

app.use(bodyParser.json());
app.use(auth.initialize());
app.auth = auth;

app.get('/', function(req,res, next) {
  if(req.path !== '/login' && !req.session.token) {
    return res.redirect('/login');
  }
});

app.get('/login',function(req,res) {
  res.render('login');
});

app.get('/register',function(req,res) {
  res.render('register');
});


authRouter(app);
driversRouter(app);
vehiclesRouter(app);
tiresRouter(app);
usersRoutes(app);



export default app;
