import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';

class VehicleController {

  constructor(Vehicle) {
    this.Vehicle = Vehicle;
  };

  listAll() {
    return this.Vehicle.findAll({})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  listAllWithJoin(driver) {
    return this.Vehicle.findAll({
      include: [{model: driver}]
    })
    .then(result => callback.defaultResponse(result))
    .catch(() => callback.errorResponse(error.message));
  }

  getById(params) {
    return this.Vehicle.findOne({where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  create(data) {
    return this.Vehicle.create(data)
      .then(result => callback.defaultResponse(result,httpStatus.CREATED))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  update(data,params) {
    return this.Vehicle.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  remove(params) {
    return this.Vehicle.destroy({where:params})
      .then(result => callback.defaultResponse(result,httpStatus.NO_CONTENT))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };
}

export default VehicleController;
