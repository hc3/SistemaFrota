import jwt from 'jwt-simple';

describe('# TEST CONTRACT # Routes driver', () => {

  const Drivers = app.datasource.models.Drivers;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;

  const defaultDriver = {
    id:1,
    cod:800,
    name:'test driver',
    phone:99801147
  }

  let token;

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
          .destroy({where: {}})
          .then(() => Drivers.create(defaultDriver))
          .then(() => {
            token = jwt.encode({id: user.id}, jwtSecret);
            console.log("Token: ",token);
            done();
          })
      })

  });

  describe('Route GET /drivers', () => {
    it('should return a list of drivers', done => {
      const driversList = Joi.array().items(Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        name:Joi.string(),
        phone:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      }));

      request
        .get('/drivers')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          console.log("corpo req: ",res.body);
          joiAssert(res.body, driversList);
          done(err);
        });
    });
  });

  describe('Route GET /drivers/{id}', () => {
    it('should return a drivers', done => {
      const drivers = Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        name:Joi.string(),
        phone:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });

      request
        .get('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          joiAssert(res.body, drivers);
          done(err);
        });
    });
  });

  describe('Route POST /drivers', () => {
    it('should create a new driver', done => {
      const newDriver = {
        id:2,
        cod:999,
        name:'Aristocleide',
        phone:99658875,
      };
      const driver = Joi.object().keys({
        id:Joi.number(),
        cod:Joi.number(),
        name:Joi.string(),
        phone:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });
      request
        .post('/drivers')
        .set('Authorization', `JWT ${token}`)
        .send(newDriver)
        .end((err, res) => {
          joiAssert(res.body, driver);
          done(err);
        });
    });
  });

  describe('Route PUT /drivers/{id}', () => {
    it('should update a driver', done => {
      const updatedDriver = {
        id: 1,
        cod:100,
        name:'UPDATED Aristocleide',
        phone:88102256,
      };
      const updatedCount = Joi.array().items(1);

      request
        .put('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .send(updatedDriver)
        .end((err, res) => {
          joiAssert(res.body, updatedCount);
          done(err);
        });
    });
  });

  describe('Route DELETE /drivers/{id}', () => {
    it('should delete a driver', done => {
      request
        .delete('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
