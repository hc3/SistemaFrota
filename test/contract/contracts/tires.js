describe('# TEST CONTRACT # Routes tires', () => {
  // busca o model de Vehicles
  const Vehicles = app.datasource.models.Vehicles;
  const Drivers = app.datasource.models.Drivers;
  const Tires = app.datasource.models.Tires;

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

  const defaulTire = {
    id:1,
    cod:10,
    marca:'PIRELLI',
    vida:1,
    sulco:1,
    recap:false,
    trash:false,
    vehicle_id:1
  }
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
      .then(() => Vehicles.create(defaultVehicle));

    Tires
      .destroy({ where: {} })
      .then(() => Tires.create(defaulTire))
      .then(() => {
        done();
      });

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
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
