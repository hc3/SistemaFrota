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
    name: 'ASTROGILDO',
    phone: 91158875
  }

  const defaultDriver2 = {
    id: 2,
    cod: 801,
    name: 'NISTRONEZIO',
    phone: 88586985
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

  describe('Route get /vehiclesJoin', () => {
    it('should return a list of vehicles', done => {
      request
        .get('/vehiclesJoin')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultVehicle.id);
          expect(res.body[0].placa).to.be.eql(defaultVehicle.placa);
          expect(res.body[0].modelo).to.be.eql(defaultVehicle.modelo);
          expect(res.body[0].marca).to.be.eql(defaultVehicle.marca);
          expect(res.body[0].eixos).to.be.eql(defaultVehicle.eixos);
          expect(res.body[0].km_inicial).to.be.eql(defaultVehicle.km_inicial);
          expect(res.body[0].driver_id).to.be.eql(defaultVehicle.driver_id);
          expect(res.body[0].Driver.id).to.be.eql(defaultDriver.id);
          expect(res.body[0].Driver.cod).to.be.eql(defaultDriver.cod);
          expect(res.body[0].Driver.name).to.be.eql(defaultDriver.name);
          expect(res.body[0].Driver.phone).to.be.eql(defaultDriver.phone);
          done(err);
        });
    });
  });


  describe('Route POST /vehicles', () => {
      const newVehicle = {
        id: 2,
        placa: 'TXT-8890',
        modelo: 'FORD CARGO 1723',
        marca: 'FORD',
        eixos: 4,
        km_inicial: 0,
        driver_id: 2
      };
    it('should create a vehicle', done => callback.defaultPost(done,request,token,newVehicle,ROTA))
  });

  describe('Route GET /vehicles/:id', () => {
    it('should find a one driver', done => callback.defaultGetOne(done, request, token, defaultVehicle, ROTA_ID))
  });

  describe('Route GET /vehicleByPlaca/:placa', () => {
    it('should find a one driver', done => {
      request
        .get('/vehicleByPlaca/TXT-8890')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultVehicle.id);
          expect(res.body[0].placa).to.be.eql(defaultVehicle.placa);
          expect(res.body[0].modelo).to.be.eql(defaultVehicle.modelo);
          expect(res.body[0].marca).to.be.eql(defaultVehicle.marca);
          expect(res.body[0].eixos).to.be.eql(defaultVehicle.eixos);
          expect(res.body[0].km_inicial).to.be.eql(defaultVehicle.km_inicial);
          expect(res.body[0].driver_id).to.be.eql(defaultVehicle.driver_id);
          done(err);
        });
    });
  });

  describe('Route PUT /vehicles/:id', () => {
      const updateVehicle = {
        id: 1,
        placa: 'ALT-8890',
        modelo: 'UPDATED FORD CARGO 1723',
        marca: 'UPDATED FORD',
        eixos: 4,
        km_inicial: 0,
        driver_id: 1
      };
    it('should update a vehicles', done => callback.defaultPut(done, request, token, updateVehicle, ROTA_ID));
  });

  describe('Route DELETE /vehicles/:id', () => {
    it('should delete a vehicle', done => callback.defaultDelete(done, request, token, ROTA_ID));
  });

})