import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class VehicleController extends AbstractController {

  constructor(Vehicle) {
    super(Vehicle);
    this.Vehicle = Vehicle;
  };

  listAllByPlaca(params) {
    return this.Vehicle.findAll({
      where: {
        placa: params
      }
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };

  listAllWithJoin(driver) {
    return this.Vehicle.findAll({
      include: [{model: driver}]
    })
    .then(result => callback.defaultResponse(result))
    .catch(error => callback.errorResponse(error.message));
  };

  getByIdWithJoin(params,driver) {
    return this.Vehicle.findOne({
      where:params,
      include: [{model: driver}]
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };
}

export default VehicleController;
