import jwt from 'jwt-simple';
import callback from './callback-integration';

describe('# TEST INTEGRATION # Routes vehicles', () => {

  const Vehicles = app.datasource.models.Vehicles;
  const Drivers = app.datasource.models.Drivers;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;
  let token;

  const defaultDriver = {
    id: 1,
    cod: 800,
      name: 'test driver',
      phone: '99801147',
      endereco: 'rua 01 bairro x',
      bairro: 'bairro 001',
      cidade: 'cidade 002',
      estado: 'estado 001',
      email: 'teste2@mail.com',
      documento: '05288900989',
      type: 'PHYSICAL'
  }

  const defaultDriver2 = {
    id: 2,
    cod: 801,
      name: 'test driver',
      phone: '99801147',
      endereco: 'rua 01 bairro x',
      bairro: 'bairro 001',
      cidade: 'cidade 002',
      estado: 'estado 001',
      email: 'teste2@mail.com',
      documento: '05288900989',
      type: 'PHYSICAL'
  }

  const defaultVehicle = {
    id: 1,
    placa: 'TXT-8890',
    modelo: 'FORD CARGO 1723',
    marca: 'FORD',
    ano: 4,
    km_inicial: 0,
    driver_id: defaultDriver.id
  };

  const ROTA = '/vehicles';
  const ROTA_ID = '/vehicles/1';
  const ROTA_BY_COD = '/driversByCodigo/800';

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
          .then(() => Drivers.create(defaultDriver2));
        Vehicles
          .destroy({
            where: {}
          })
          .then(() => Vehicles.create(defaultVehicle))
          .then(() => {
            token = jwt.encode({
              id: user.id
            }, jwtSecret);
            done();
          });
      });
  });

  describe('Route GET /vehicles', () => {
    it('should return a list of vehicles', done => callback.defaultGet(done, request, token, defaultVehicle, ROTA))
  });

  describe('Route POST /vehicles', () => {
    const newVehicle = {
      id: 2,
      placa: 'TXT-8890',
      modelo: 'FORD CARGO 1723',
      marca: 'FORD',
      ano: 4,
      km_inicial: 0,
      driver_id: 2
    };
    it('should create a vehicle', done => callback.defaultPost(done, request, token, newVehicle, ROTA))
  });

  describe('Route GET /vehicles/:id', () => {
    it('should find a one driver', done => callback.defaultGetOne(done, request, token, defaultVehicle, ROTA_ID))
  });
  
  describe('Route PUT /vehicles/:id', () => {
    const updateVehicle = {
      id: 1,
      placa: 'ALT-8890',
      modelo: 'UPDATED FORD CARGO 1723',
      marca: 'UPDATED FORD',
      ano: 4,
      km_inicial: 0,
      driver_id: 1
    };
    it('should update a vehicles', done => callback.defaultPut(done, request, token, updateVehicle, ROTA_ID));
  });

  describe('Route DELETE /vehicles/:id', () => {
    it('should delete a vehicle', done => callback.defaultDelete(done, request, token, ROTA_ID));
  });

})