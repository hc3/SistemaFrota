describe('# TEST INTEGRATION # Routes vehicles', () => {

  const Vehicles = app.datasource.models.Vehicles;
  const Drivers = app.datasource.models.Drivers;

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
    km_rodado:0,
    driver_id:defaultDriver.id
  };

  beforeEach(done => {
    Drivers
      .destroy({where:{}})
      .then(() => Drivers.create(defaultDriver))
      .then(() => Drivers.create(defaultDriver2));

    Vehicles
      .destroy({where:{}})
      .then(() => Vehicles.create(defaultVehicle))
      .then(() => {
        done();
      });
  });

  describe('Route get /vehicles', () => {
    it('should return a list of vehicles', done => {
      request
        .get('/vehicles')
        .end((err,res) => {
          expect(res.body[0].id).to.be.eql(defaultVehicle.id);
          expect(res.body[0].placa).to.be.eql(defaultVehicle.placa);
          expect(res.body[0].modelo).to.be.eql(defaultVehicle.modelo);
          expect(res.body[0].marca).to.be.eql(defaultVehicle.marca);
          expect(res.body[0].eixos).to.be.eql(defaultVehicle.eixos);
          expect(res.body[0].km_rodado).to.be.eql(defaultVehicle.km_rodado);
          expect(res.body[0].driver_id).to.be.eql(defaultVehicle.driver_id);
          done(err);
        });
    });
  });

  describe('Route get /vehiclesJoin', () => {
    it('should return a list of vehicles', done => {
      request
        .get('/vehiclesJoin')
        .end((err,res) => {
          expect(res.body[0].id).to.be.eql(defaultVehicle.id);
          expect(res.body[0].placa).to.be.eql(defaultVehicle.placa);
          expect(res.body[0].modelo).to.be.eql(defaultVehicle.modelo);
          expect(res.body[0].marca).to.be.eql(defaultVehicle.marca);
          expect(res.body[0].eixos).to.be.eql(defaultVehicle.eixos);
          expect(res.body[0].km_rodado).to.be.eql(defaultVehicle.km_rodado);
          expect(res.body[0].driver_id).to.be.eql(defaultVehicle.driver_id);
          expect(res.body[0].Driver.id).to.be.eql(defaultDriver.id);
          expect(res.body[0].Driver.cod).to.be.eql(defaultDriver.cod);
          expect(res.body[0].Driver.name).to.be.eql(defaultDriver.name);
          expect(res.body[0].Driver.phone).to.be.eql(defaultDriver.phone);
          done(err);
        });
    });
  });


  describe('Route PUT /vehicles', () => {
    it('should create a vehicle', done => {
      const newVehicle = {
        id:2,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_rodado:0,
        driver_id:2
      };
      request
        .post('/vehicles')
        .send(newVehicle)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(newVehicle.id);
          expect(res.body.placa).to.be.eql(newVehicle.placa);
          expect(res.body.modelo).to.be.eql(newVehicle.modelo);
          expect(res.body.marca).to.be.eql(newVehicle.marca);
          expect(res.body.eixos).to.be.eql(newVehicle.eixos);
          expect(res.body.km_rodado).to.be.eql(newVehicle.km_rodado);
          expect(res.body.driver_id).to.be.eql(newVehicle.driver_id);
          done(err);
        });
    });
  });

  describe('Route GET /vehicles/:id', () => {
    it('should find a one driver', done => {
      request
        .get('/vehicles/1')
        .end((err,res) => {
          expect(res.body.id).to.be.eql(defaultVehicle.id);
          expect(res.body.placa).to.be.eql(defaultVehicle.placa);
          expect(res.body.modelo).to.be.eql(defaultVehicle.modelo);
          expect(res.body.marca).to.be.eql(defaultVehicle.marca);
          expect(res.body.eixos).to.be.eql(defaultVehicle.eixos);
          expect(res.body.km_rodado).to.be.eql(defaultVehicle.km_rodado);
          expect(res.body.driver_id).to.be.eql(defaultVehicle.driver_id);
          done(err);
        });
    });
  });

  describe('Route PUT /vehicles/:id', () => {
    it('should update a vehicles', done => {
      const updateVehicle = {
        id:1,
        placa:'ALT-8890',
        modelo:'UPDATED FORD CARGO 1723',
        marca:'UPDATED FORD',
        eixos:4,
        km_rodado:0,
        driver_id:1
      };
      request
        .put('/vehicles/1')
        .send(updateVehicle)
        .end((err,res) => {
          expect(res.body).to.be.eql([1])
          done(err);
        });
    });
  });

  describe('Route DELETE /vehicles/:id', () => {
    it('should delete a vehicle', done => {
      request
        .delete('/vehicles/1')
        .end((err,res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });

})
