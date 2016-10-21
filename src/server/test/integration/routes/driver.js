import jwt from 'jwt-simple';

describe('# TEST INTEGRATION # Routes drivers', () => {

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
            done();
          })
      })

  });

  describe('Route GET /drivers', () => {
    it('should return a list of drivers', done => {
        request
          .get('/drivers')
          .set('Authorization', `JWT ${token}`)
          .end((err,res) => {
            expect(res.body[0].id).to.be.eql(defaultDriver.id);
            expect(res.body[0].cod).to.be.eql(defaultDriver.cod);
            expect(res.body[0].name).to.be.eql(defaultDriver.name);
            expect(res.body[0].phone).to.be.eql(defaultDriver.phone);
            done(err);
          });
    });
  });

  describe('Route PUT /drivers', () => {
    it('should create a driver', done => {
      const newDriver = {
        id:2,
        cod:800,
        name:'test driver',
        phone:99801147
      }
      request
        .post('/drivers')
        .set('Authorization', `JWT ${token}`)
        .send(newDriver)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(newDriver.id)
          expect(res.body.cod).to.be.eql(newDriver.cod)
          expect(res.body.name).to.be.eql(newDriver.name)
          expect(res.body.phone).to.be.eql(newDriver.phone)
          done(err);
        });
    });
  });

  describe('Route GET /drivers/:id', () => {
    it('should find a one driver', done => {
      request
        .get('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(defaultDriver.id);
          expect(res.body.cod).to.be.eql(defaultDriver.cod);
          expect(res.body.name).to.be.eql(defaultDriver.name);
          expect(res.body.phone).to.be.eql(defaultDriver.phone);
          done(err);
        });
    });
  });

  describe('Route PUT /drivers/:id', () => {
    it('should update a driver', done => {
      const updatedDriver = {
        id:1,
        cod:801,
        name:'Updated driver',
        phone:88901147
      }
      request
        .put('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .send(updatedDriver)
        .end((err,res) => {
          expect(res.body).to.be.eql([1]);
          done(err);
        });
    });
  });

  describe('Route DELETE /drivers/:id', () => {
    it('should delete a driver', done => {
      request
        .delete('/drivers/1')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        })
    })
  });

  describe('Route GET /driversByCodigo/:cod', () => {
    it('should find a one driver', done => {
      request
        .get('/driversByCodigo/800')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.body[0].id).to.be.eql(defaultDriver.id);
          expect(res.body[0].cod).to.be.eql(defaultDriver.cod);
          expect(res.body[0].name).to.be.eql(defaultDriver.name);
          expect(res.body[0].phone).to.be.eql(defaultDriver.phone);
          done(err);
        });
    });
  });

})
