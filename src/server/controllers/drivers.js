import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class DriversController extends AbstractController {

  constructor(Drivers) {
    super(Drivers);
    this.Drivers = Drivers;
  };

  getAllByCodigo(params) {
    return this.Drivers.findAll({
        where: {
          cod: params
        }
      })
      .then(result => callback.defaultResponse(result))
      .catch(error => callback.errorResponse(error.message));
  };

  listAllWithJoin(vehicle) {
    return this.Drivers.findAll({
      include: [{model: vehicle}]
    })
    .then(result => callback.defaultResponse(result))
    .catch(error => callback.errorResponse(error.message));
  };

}

export default DriversController;