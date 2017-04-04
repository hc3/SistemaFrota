import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';
import AbstractController from './abstractController';

class UsersController extends AbstractController{

  constructor(Users) {
    super(Users);
    this.Users = Users;
  };

}

export default UsersController;
