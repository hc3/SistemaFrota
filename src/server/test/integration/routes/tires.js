import jwt from 'jwt-simple';
import callback from './callback-integration';

describe('# TEST INTEGRATION # Routes Tires', () => {

  const Vehicles = app.datasource.models.Vehicles;
  const Tires = app.datasource.models.Tires;
  const Drivers = app.datasource.models.Drivers;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;
  let token;

  const defaultDriver = {
    id: 1,
    cod: 800,
    name: 'ASTROGILDO',
    phone: 91158875
  }

  const defaultVehicle = {
    id: 1,
    placa: 'TXT-8890',
    modelo: 'FORD CARGO 1723',
    marca: 'FORD',
    eixos: 4,
    km_inicial: 0,
    driver_id: defaultDriver.id
  };

  const defaultTire = {
    id: 1,
    cod: 10,
    marca: 'PIRELLI',
    vida: 1,
    sulco: 1,
    recap: false,
    trash: false,
    vehicle_id: defaultVehicle.id
  };

  const ROTA = '/tires';
  const ROTA_ID = '/tires/1';
  const ROTA_BY_COD = '/tiresByCodigo/10';

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

        Vehicles
          .destroy({
            where: {}
          })
          .then(() => Vehicles.create(defaultVehicle))

        Tires
          .destroy({
            where: {}
          })
          .then(() => Tires.create(defaultTire))
          .then(() => {
            token = jwt.encode({
              id: user.id
            }, jwtSecret);
            done();
          })
      })

  });

  describe('Route get /tires', () => {
    it('should return a list of tires', done => callback.defaultGet(done, request, token, defaultTire, ROTA))
  });

  describe('Route POST /tires', () => {
    const createdTire = {
        id: 2,
        cod: 11,
        marca: 'CREATED TIRE',
        vida: 2,
        sulco: 2,
        recap: false,
        trash: false,
        vehicle_id: defaultVehicle.id
      };
    it('should create a tires', done => callback.defaultPost(done,request,token,createdTire,ROTA))
  });

  describe('Route GET /tires/:id', () => {
    it('should find a one tires', done => callback.defaultGetOne(done, request, token, defaultTire, ROTA_ID))
  });

  describe('Route GET /tires/:cod', () => {
    it('should find a one tires', done => callback.defaultGet(done, request, token, defaultTire, ROTA_BY_COD))
  });

  describe('Route PUT /tires/:id', () => {
      const updatedTire = {
        id: 2,
        cod: 11,
        marca: 'UPDATED TIRE',
        vida: 2,
        sulco: 2,
        recap: false,
        trash: false,
        vehicle_id: defaultVehicle.id
      };
    it('should update a tires', done => callback.defaultPut(done, request, token, updatedTire, ROTA_ID));
  });

  describe('Route DELETE /tires/:id', () => {
    it('should delete a tires', done => callback.defaultGetOne(done, request, token, defaultTire, ROTA_ID))
  });

})