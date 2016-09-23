import jwt from 'jwt-simple';

describe('# TEST CONTRACT # Routes vehicles', () => {

  const Vehicles = app.datasource.models.Vehicles;
  const Drivers = app.datasource.models.Drivers;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;
  let token;

  const defaultDriver = {
    id:1,
    cod:800,
    name:'ASTROGILDO',
    phone:91158875
  }

  const defaultDriver2 = {
    id:2,
    cod:801,
    name:'NISTRONEZIO',
    phone:88586985
  }

  const defaultVehicle = {
    id:1,
    placa:'TXT-8890',
    modelo:'FORD CARGO 1723',
    marca:'FORD',
    eixos:4,
    km_inicial:0,
    driver_id:defaultDriver.id
  };

  beforeEach(done => {
      Users
        .destroy({where: {}})
        .then(() => Users.create({
          name: 'pepa',
          email: 'pepa@mail.com',
          password: '12345'
        }))
        .then(user => {
          Drivers
            .destroy({where:{}})
            .then(() => Drivers.create(defaultDriver))
            .then(() => Drivers.create(defaultDriver2));
          Vehicles
            .destroy({where:{}})
            .then(() => Vehicles.create(defaultVehicle))
            .then(() => {
              token = jwt.encode({id: user.id}, jwtSecret);
              done();
            });
        });
  });


  describe('Route GET /vehicles', () => {
    it('should return a list of vehicles', done => {
      const vehiclesList = Joi.array().items(Joi.object().keys({
        id:Joi.number(),
        placa:Joi.string(),
        modelo:Joi.string(),
        marca:Joi.string(),
        eixos:Joi.number(),
        km_inicial:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      }));

      request
        .get('/vehicles')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, vehiclesList);
          done(err);
        });
    });
  });

  describe('Route GET /vehiclesJoin', () => {
    it('should return a list populated of vehicles', done => {
      const vehiclesList = Joi.array().items(Joi.object().keys({
        id:Joi.number(),
        placa:Joi.string(),
        modelo:Joi.string(),
        marca:Joi.string(),
        eixos:Joi.number(),
        km_inicial:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso(),
        Driver: {
          id:Joi.number(),
          cod:Joi.number(),
          name:Joi.string(),
          phone:Joi.number(),
          created_at: Joi.string(),
          updated_at: Joi.string()
        }
      }));

      request
        .get('/vehiclesJoin')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, vehiclesList);
          done(err);
        });
    });
  });


  describe('Route GET /vehicles/{id}', () => {
    it('should return a vehicles', done => {
      const vehicles = Joi.object().keys({
        id:Joi.number(),
        placa:Joi.string(),
        modelo:Joi.string(),
        marca:Joi.string(),
        eixos:Joi.number(),
        km_inicial:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });

      request
        .get('/vehicles/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, vehicles);

          done(err);
        });
    });
  });

  describe('Route POST /vehicles', () => {
    it('should create a new vehicle', done => {
      const newVehicle = {
        id:2,
        placa:'PJM-8890',
        modelo:'NEW FORD CARGO 1723',
        marca:'NEW FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1
      };
      const vehicle = Joi.object().keys({
        id:Joi.number(),
        placa:Joi.string(),
        modelo:Joi.string(),
        marca:Joi.string(),
        eixos:Joi.number(),
        km_inicial:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });
      request
        .post('/vehicles')
        .set('Authorization', `JWT ${token}`)
        .send(newVehicle)
        .end((err, res) => {
          joiAssert(res.body, vehicle);
          done(err);
        });
    });
  });

  describe('Route PUT /vehicles/{id}', () => {
    it('should update a vehicle', done => {
      const updatedVehicle = {
        id: 1,
        placa:'PKQ-8890',
        modelo:'UPDATED FORD CARGO 1723',
        marca:'UPDATED FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1
      };
      const updatedCount = Joi.array().items(1);

      request
        .put('/vehicles/1')
        .set('Authorization', `JWT ${token}`)
        .send(updatedVehicle)
        .end((err, res) => {
          joiAssert(res.body, updatedCount);
          done(err);
        });
    });
  });

  describe('Route DELETE /vehicles/{id}', () => {
    it('should delete a driver', done => {
      request
        .delete('/vehicles/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
