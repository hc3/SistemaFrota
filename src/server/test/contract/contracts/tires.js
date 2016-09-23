import jwt from 'jwt-simple';

describe('# TEST CONTRACT # Routes Tires', () => {

  const Vehicles = app.datasource.models.Vehicles;
  const Tires = app.datasource.models.Tires;
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

  const defaultVehicle = {
    id:1,
    placa:'TXT-8890',
    modelo:'FORD CARGO 1723',
    marca:'FORD',
    eixos:4,
    km_inicial:0,
    driver_id:defaultDriver.id
  };

  const defaultTire = {
    id:1,
    cod:10,
    marca:'PIRELLI',
    vida:1,
    sulco:1,
    recap:false,
    trash:false,
    vehicle_id:defaultVehicle.id
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

        Vehicles
          .destroy({where:{}})
          .then(() => Vehicles.create(defaultVehicle))

        Tires
          .destroy({where:{}})
          .then(() => Tires.create(defaultTire))
          .then(() => {
            token = jwt.encode({id: user.id}, jwtSecret);
            done();
          })
      })

  });


  describe('Route GET /tires', () => {
    it('should return a list of tires', done => {
      const tiresList = Joi.array().items(Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        marca:Joi.string(),
        vida:Joi.number(),
        sulco:Joi.number(),
        recap:Joi.boolean(),
        trash:Joi.boolean(),
        vehicle_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      }));

      request
        .get('/tires')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, tiresList);
          done(err);
        });
    });
  });

  describe('Route GET /tires/{id}', () => {
    it('should return a tires', done => {
      const tires = Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        marca:Joi.string(),
        vida:Joi.number(),
        sulco:Joi.number(),
        recap:Joi.boolean(),
        trash:Joi.boolean(),
        vehicle_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });

      request
        .get('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, tires);

          done(err);
        });
    });
  });

  describe('Route POST /tires', () => {
    it('should create a new tires', done => {
      const newTire = {
        id:2,
        cod:11,
        marca:'NEW PIRELLI',
        vida:1,
        sulco:1,
        recap:false,
        trash:false,
        vehicle_id:1
      };
      const tires = Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        marca:Joi.string(),
        vida:Joi.number(),
        sulco:Joi.number(),
        recap:Joi.boolean(),
        trash:Joi.boolean(),
        vehicle_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });
      request
        .post('/tires')
        .set('Authorization', `JWT ${token}`)
        .send(newTire)
        .end((err, res) => {
          joiAssert(res.body, tires);
          done(err);
        });
    });
  });

  describe('Route PUT /tires/{id}', () => {
    it('should update a tires', done => {
      const updatedTire = {
        id: 1,
        cod:11,
        marca:'UPDATED PIRELLI',
        vida:2,
        sulco:1,
        recap:false,
        trash:false,
        vehicle_id:1
      };
      const updatedCount = Joi.array().items(1);

      request
        .put('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .send(updatedTire)
        .end((err, res) => {
          joiAssert(res.body, updatedCount);
          done(err);
        });
    });
  });

  describe('Route DELETE /tires/{id}', () => {
    it('should delete a driver', done => {
      request
        .delete('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
