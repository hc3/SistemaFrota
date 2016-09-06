describe('# TEST CONTRACT # Routes driver', () => {
  // busca o model de Drivers
  const Drivers = app.datasource.models.Drivers;
  const defaultDriver = {
    id: 1,
    cod:800,
    name:'test driver',
    phone:99801147
  };
  // deixa explicito para o framework de testes que antes de rodar os testes ele deve
  // realizar os passos abaixo.
  beforeEach(done => {
    Drivers
      // como o model é criado pelo sequelize o destroy faz parte do sequelize (vide documentação)
      .destroy({ where: {} })
      .then(() => Drivers.create(defaultDriver))
      .then(() => {
        done();
      });
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
        .end((err, res) => {
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
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);
          done(err);
        });
    });
  });
});
