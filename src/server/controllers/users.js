import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';


class UsersController {

  constructor(Users) {
    this.Users = Users;
  };

  listAll() {
    return this.Users.findAll({})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  getById(params) {
    return this.Users.findOne({where: params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message));
  };

  create(data) {
    return this.Users.create(data)
      .then(result => callback.defaultResponse(result,httpStatus.CREATED))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  update(data,params) {
    return this.Users.update(data,{where:params})
      .then(result => callback.defaultResponse(result))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
  };

  remove(params) {
    return this.Users.destroy({where:params})
      .then(result => callback.defaultResponse(result,httpStatus.NO_CONTENT))
      .catch(() => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY))
  };

}

export default UsersController;
