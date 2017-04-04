import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class TiresController extends AbstractController {

  constructor(Tires) {
    super(Tires);
    this.Tires = Tires;
  };

  listAllByCod(params) {
    return this.Tires.findAll({
      where: {
        cod: params
      }
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };

  listAllWithJoin(vehicle) {
    return this.Tires.findAll({
      include: [{model: vehicle}]
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };

  getByIdWithJoin(params,vehicle) {
    return this.Tires.findOne({
      where: params,
      include: [{model: vehicle}]
    })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };
}

export default TiresController;
