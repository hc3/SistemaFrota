import jwt from 'jwt-simple';

describe('# TEST INTEGRATION # Routes Tires', () => {

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

  describe('Route get /tires', () => {
    it('should return a list of tires', done => {
      request
        .get('/tires')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.body[0].id).to.be.eql(defaultTire.id);
          expect(res.body[0].cod).to.be.eql(defaultTire.cod);
          expect(res.body[0].marca).to.be.eql(defaultTire.marca);
          expect(res.body[0].vida).to.be.eql(defaultTire.vida);
          expect(res.body[0].sulco).to.be.eql(defaultTire.sulco);
          expect(res.body[0].recap).to.be.eql(defaultTire.recap);
          expect(res.body[0].trash).to.be.eql(defaultTire.trash);
          expect(res.body[0].vehicle_id).to.be.eql(defaultTire.vehicle_id);
          done(err);
        });
    });
  });

  describe('Route PUT /tires', () => {
    it('should create a tires', done => {
      const createdTire = {
        id:2,
        cod:11,
        marca:'CREATED TIRE',
        vida:2,
        sulco:2,
        recap:false,
        trash:false,
        vehicle_id:defaultVehicle.id
      };
      request
        .post('/tires')
        .set('Authorization', `JWT ${token}`)
        .send(createdTire)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(createdTire.id);
          expect(res.body.cod).to.be.eql(createdTire.cod);
          expect(res.body.marca).to.be.eql(createdTire.marca);
          expect(res.body.vida).to.be.eql(createdTire.vida);
          expect(res.body.sulco).to.be.eql(createdTire.sulco);
          expect(res.body.recap).to.be.eql(createdTire.recap);
          expect(res.body.trash).to.be.eql(createdTire.trash);
          expect(res.body.vehicle_id).to.be.eql(createdTire.vehicle_id);
          done(err);
        });
    });
  });

  describe('Route GET /tires/:id', () => {
    it('should find a one driver', done => {
      request
        .get('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(defaultTire.id);
          expect(res.body.cod).to.be.eql(defaultTire.cod);
          expect(res.body.marca).to.be.eql(defaultTire.marca);
          expect(res.body.vida).to.be.eql(defaultTire.vida);
          expect(res.body.sulco).to.be.eql(defaultTire.sulco);
          expect(res.body.recap).to.be.eql(defaultTire.recap);
          expect(res.body.trash).to.be.eql(defaultTire.trash);
          expect(res.body.vehicle_id).to.be.eql(defaultTire.vehicle_id);
          done(err);
        });
    });
  });

  describe('Route PUT /tires/:id', () => {
    it('should update a tires', done => {
      const updatedTire = {
        id:2,
        cod:11,
        marca:'UPDATED TIRE',
        vida:2,
        sulco:2,
        recap:false,
        trash:false,
        vehicle_id:defaultVehicle.id
      };
      request
        .put('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .send(updatedTire)
        .end((err,res) => {
          expect(res.body).to.be.eql([1])
          done(err);
        });
    });
  });

  describe('Route DELETE /tires/:id', () => {
    it('should delete a vehicle', done => {
      request
        .delete('/tires/1')
        .set('Authorization', `JWT ${token}`)
        .end((err,res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });

})
