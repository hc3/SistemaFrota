import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';

class TiresController {

  constructor(Tires) {
    this.Tires = Tires;
  };

  listAll() {
    return this.Tires.findAll({})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  }

  getById(params) {
    return this.Tires.findOne({where: params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  }

  create(data) {
    return this.Tires.create(data)
      .then(result => callback.defaultResponse(result,httpStatus.CREATED))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  }

  update(data,params) {
    return this.Tires.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  }

  remove(params) {
    return this.Tires.destroy({where:params})
      .then(result => callback.defaultResponse(result,httpStatus.NO_CONTENT))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  }

}

export default TiresController;
