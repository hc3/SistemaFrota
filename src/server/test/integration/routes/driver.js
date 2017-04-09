import jwt from 'jwt-simple';
import callback from './callback-integration';

describe('# TEST INTEGRATION # Routes drivers', () => {

  const Drivers = app.datasource.models.Drivers;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;

  const defaultDriver = {
    id: 1,
    cod: 800,
    name: 'test driver',
    phone: 99801147
  }

  const ROTA = '/drivers';
  const ROTA_ID = '/drivers/1';
  const ROTA_BY_COD = '/driversByCodigo/800';

  let token;

  beforeEach(done => {
    Users
      .destroy({
        where: {}
      })
      .then(() => Users.create({
        name: 'pepa',
        email: 'pepa@mail.com',
        password: '12345'
      }))
      .then(user => {
        Drivers
          .destroy({
            where: {}
          })
          .then(() => Drivers.create(defaultDriver))
          .then(() => {
            token = jwt.encode({
              id: user.id
            }, jwtSecret);
            done();
          })
      })

  });

  describe('Route GET /drivers', () => {
    it('should return a list of drivers', done => callback.defaultGet(done, request, token, defaultDriver, ROTA))
  });

  describe('ROUTE POST /drivers', () => {
    const newDriver = {
      id: 2,
      cod: 800,
      name: 'test driver',
      phone: 99801147
    };
    it('should create a driver', done => callback.defaultPost(done,request,token,newDriver,ROTA))
  });

  describe('Route GET /drivers/:id', () => {
    it('should return a one drivers', done => callback.defaultGetOne(done, request, token, defaultDriver, ROTA_ID))
  });

  describe('Route PUT /drivers/:id', () => {
    const updatedDriver = {
      id: 1,
      cod: 801,
      name: 'Updated driver',
      phone: 88901147
    };
    it('should update a driver', done => callback.defaultPut(done, request, token, updatedDriver, ROTA_ID));
  });

  describe('Route DELETE /drivers/:id', () => {
    it('should delete a driver', done => callback.defaultDelete(done, request, token, ROTA_ID));
  });

  describe('Route GET /driversByCodigo/:cod', () => {
    it('should find a one driver', done => callback.defaultGet(done, request, token, defaultDriver, ROTA_BY_COD))
  });

})