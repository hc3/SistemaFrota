describe('Routes drivers', () => {

  const Drivers = app.datasource.models.Drivers;

  const defaultDriver = {
    id:1,
    cod:800,
    name:'test driver',
    phone:99801147
  }

  beforeEach(done => {
    Drivers
      .destroy({where:{}})
      .then(() => Drivers.create(defaultDriver))
      .then(() => {
        done();
      });
  });

  describe('Route GET /drivers', () => {
    it('should return a list of drivers', done => {
        request
          .get('/drivers')
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
        .send(newDriver)
        .end((err,res) => {
          expect(res.body.id).to.be.eql(newDriver.id)
          expect(res.body.cod).to.be.eql(newDriver.cod)
          expect(res.body.name).to.be.eql(newDriver.name)
          expect(res.body.phone).to.be.eql(newDriver.phone)
          done(err);
        })
    })
  })
})
