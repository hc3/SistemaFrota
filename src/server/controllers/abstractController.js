import callback from '../utils/callbackCtrl';
import httpStatus from 'http-status';

class AbstractController {

    constructor(Model) {
        this.Model = Model;
    };

    listAll() {
        return this.Model.findAll({})
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message));
    };

    getById(params) {
        return this.Model.findOne({
                where: params
            })
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message));
    };

    create(data) {
        return this.Model.create(data)
            .then(result => callback.defaultResponse(result, httpStatus.CREATED))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    };

    update(data, params) {
        return this.Model.update(data, {
                where: params
            })
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY));
    };

    remove(params) {
        return this.Model.destroy({
                where: params
            })
            .then(result => callback.defaultResponse(result, httpStatus.NO_CONTENT))
            .catch(error => callback.errorResponse(error.message, httpStatus.UNPROCESSABLE_ENTITY))
    };
}

export default AbstractController;