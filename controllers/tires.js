import callback from '../utils/callbackCtrl';

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
      .then(result => callback.defaultResponse(result,201))
      .catch(() => callback.errorResponse(error.message,422));
  }

  update(data,params) {
    return this.Tires.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,422));
  }

  remove(params) {
    return this.Tires.destroy({where:params})
      .then(result => callback.defaultResponse(result,204))
      .catch(() => callback.errorResponse(error.message,422));
  }

}

export default TiresController;
