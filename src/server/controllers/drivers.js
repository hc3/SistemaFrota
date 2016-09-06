import callback from '../utils/callbackCtrl';

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
      .then(result => callback.defaultResponse(result,201))
      .catch(() => callback.errorResponse(error.message,422));
  };

  update(data,params) {
    return this.Drivers.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,422));
  };

  remove(params) {
    return this.Drivers.destroy({where:params})
      .then(result => callback.defaultResponse(result,204))
      .catch(() => callback.errorResponse(error.message,422))
  };

}

export default DriversController;
