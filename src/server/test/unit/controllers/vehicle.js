import VehiclesController from '../../../controllers/vehicles';

describe('# TEST UNIT CONTROLLER # Controllers: vehicles', () => {

  describe('GET all vehicles listAll()', () => {
    it('should return a list of vehicles', () => {
      const Vehicle = {
        findAll: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Vehicle.findAll({})).thenResolve(expetectedResponse);

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.listAll()
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('GET all populated vehicles listAllWithJoin()', () => {
    it('should return a list populated of vehicles', () => {
      const Drivers = app.datasource.models.Drivers;
      const Vehicle = {
        findAll: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
        Driver: {
          id:1,
          cod:800,
          name:'ASTROGILDO',
          phone:91158875,
          created_at: '2016-09-12T12:22:30.848Z',
          updated_at: '2016-09-12T12:22:30.848Z'
        }
      }];

      td.when(Vehicle.findAll({include: [{model: Drivers}]})).thenResolve(expetectedResponse);

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.listAllWithJoin(Drivers)
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('GET a driver getById()', () => {
    it('should return a driver',() => {
      const Vehicle = {
        findOne: td.function(),
      };

      const expetectedResponse = [{
        id:1,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Vehicle.findOne({ where: {id: 1}})).thenResolve(expetectedResponse);

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expetectedResponse));
    });
  });

  describe('CREATE a driver create()', () => {
    it('should create a driver', () => {
      const Vehicle = {
        create: td.function(),
      };

      const requestBody = {
        placa:'CRT-8890',
        modelo:'CREATED VEHICLE',
        marca:'CREATED FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
      };

      const expetectedResponse = [{
        id:1,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Vehicle.create(requestBody)).thenResolve(expetectedResponse);

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.create(requestBody)
        .then(response => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('UPDATE a driver update()', () => {
    it('should update a driver', () => {
      const Vehicle = {
        update: td.function(),
      }

      const requestBody = {
        id:1,
        placa:'UPD-8890',
        modelo:'UPDATED VEHICLE',
        marca:'UPDATED FORD',
      };

      const expetectedResponse = [{
        id:1,
        placa:'TXT-8890',
        modelo:'FORD CARGO 1723',
        marca:'FORD',
        eixos:4,
        km_inicial:0,
        driver_id:1,
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z'
      }];

      td.when(Vehicle.update(requestBody, { where: { id: 1}})).thenResolve(expetectedResponse);

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.update(requestBody, { id: 1})
        .then(response => {
          expect(response.data).to.be.eql(expetectedResponse);
        })
    });
  });

  describe('REMOVE a driver delete()', () => {
    it('should remove a driver', () => {
      const Vehicle = {
        destroy: td.function(),
      };

      const expetectedResponse = {};

      td.when(Vehicle.destroy({ where: { id: 1 }})).thenResolve();

      const vehiclesController = new VehiclesController(Vehicle);
      return vehiclesController.remove({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));

    });
  });

});
