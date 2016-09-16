import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';


class DriversController {

  constructor(Drivers) {
    this.Drivers = Drivers;
  };

  listAll() {
    return this.Drivers.findAll({})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  getById(params) {
    return this.Drivers.findOne({where: params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  create(data) {
    return this.Drivers.create(data)
      .then(result => callback.defaultResponse(result,httpStatus.CREATED))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  update(data,params) {
    return this.Drivers.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  remove(params) {
    return this.Drivers.destroy({where:params})
      .then(result => callback.defaultResponse(result,httpStatus.NO_CONTENT))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY))
  };

}

export default DriversController;
