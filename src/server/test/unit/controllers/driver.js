import DriversController from '../../../controllers/drivers';

describe('# TEST UNIT CONTROLLER # Controllers: drivers', () => {

  describe('GET all drivers listAll()', () => {
    it('should return a list of drivers', () => {
      const Drivers = {
        findAll: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        cod:800,
        name:'test driver',
        phone:99801147,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Drivers.findAll({})).thenResolve(expetectedResponse);

      const driversController = new DriversController(Drivers);
      return driversController.listAll()
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('GET a driver getById()', () => {
    it('should return a driver',() => {
      const Drivers = {
        findOne: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        cod:800,
        name:'test driver',
        phone:99801147,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Drivers.findOne({ where: {id: 1}})).thenResolve(expetectedResponse);

      const driversController = new DriversController(Drivers);
      return driversController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('CREATE a driver create()', () => {
    it('should create a driver', () => {
      const Drivers = {
        create: td.function(),
      };

      const requestBody = {
        cod:999,
        name:'created on test unit',
        phone:91586692
      };

      const expetectedResponse = [{
        id:1,
        cod:999,
        name:'created on test unit',
        phone:91586692,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Drivers.create(requestBody)).thenResolve(expetectedResponse);

      const driversController = new DriversController(Drivers);
      return driversController.create(requestBody)
        .then(response => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('UPDATE a driver update()', () => {
    it('should update a driver', () => {
      const Drivers = {
        update: td.function(),
      }

      const requestBody = {
        id:1,
        cod:999,
        name:'updated on test unit',
        phone:91586692
      };

      const expetectedResponse = [{
        id:1,
        cod:999,
        name:'updated on test unit',
        phone:91586692,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Drivers.update(requestBody, { where: { id: 1}})).thenResolve(expetectedResponse);

      const driversController = new DriversController(Drivers);
      return driversController.update(requestBody, { id: 1})
        .then(response => {
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('REMOVE a driver delete()', () => {
    it('should remove a driver', () => {
      const Drivers = {
        destroy: td.function(),
      };

      const expetectedResponse = {};

      td.when(Drivers.destroy({ where: { id: 1 }})).thenResolve();

      const driversController = new DriversController(Drivers);
      return driversController.remove({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));

    });
  });

});
