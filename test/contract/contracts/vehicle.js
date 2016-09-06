describe('# TEST CONTRACT # Routes vehicles', () => {
  // busca o model de Vehicles
  const Vehicles = app.datasource.models.Vehicles;
  const Drivers = app.datasource.models.Drivers;

  const defaultDriver = {
    id: 1,
    cod:800,
    name:'test driver',
    phone:99801147
  };

  const defaultVehicle = {
    id: 1,
    placa:'TXT-8890',
    modelo:'FORD CARGO 1723',
    marca:'FORD',
    eixos:4,
    km_rodado:0,
    driver_id:1
  };
  // deixa explicito para o framework de testes que antes de rodar os testes ele deve
  // realizar os passos abaixo.
  beforeEach(done => {
    Drivers
      // como o model é criado pelo sequelize o destroy faz parte do sequelize (vide documentação)
      .destroy({ where: {} })
      .then(() => Drivers.create(defaultDriver));

    Vehicles
      // como o model é criado pelo sequelize o destroy faz parte do sequelize (vide documentação)
      .destroy({ where: {} })
      .then(() => Vehicles.create(defaultVehicle))
      .then(() => {
        done();
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
        km_rodado:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      }));

      request
        .get('/vehicles')
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
        km_rodado:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });

      request
        .get('/vehicles/1')
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
        km_rodado:0,
        driver_id:1
      };
      const vehicle = Joi.object().keys({
        id:Joi.number(),
        placa:Joi.string(),
        modelo:Joi.string(),
        marca:Joi.string(),
        eixos:Joi.number(),
        km_rodado:Joi.number(),
        driver_id:Joi.number(),
        created_at: Joi.date().iso(),
        updated_at: Joi.date().iso()
      });
      request
        .post('/vehicles')
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
        km_rodado:0,
        driver_id:1
      };
      const updatedCount = Joi.array().items(1);

      request
        .put('/vehicles/1')
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
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
