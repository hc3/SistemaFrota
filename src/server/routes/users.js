import UsersController from '../controllers/users';
import callback from '../utils/callbackRoutes';

export default (app) => {
    const usersController = new UsersController(app.datasource.models.Users);

    app.route('/users')
        .get((req, res) => {
            usersController.listAll()
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .post((req, res) => {
            usersController.create(req.body)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        });


    app.route('/users/:id')
        .get((req, res) => {
            usersController.getById(req.params)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .put((req, res) => {
            usersController.update(req.body, req.params)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        })
        .delete((req, res) => {
            usersController.remove(req.params)
                .then(response => callback.defaultResponse(response, req, res))
                .catch(error => callback.defaultError(error, req, res))
        });


    app.route('/users/registration')
        .post((req, res) => {
            usersController.create(req.body)
                .then(response => {
                    res.statusCode(response.statusCode);
                    res.json(response.data);
                    req.session.success = 'Registro realizado com sucesso!';
                    return res.redirect('/login');
                })
                .catch(error => {
                    //res.statusCode(error.statusCode);
                    res.json(error);
                    req.session.error = 'Erro ao realizar registro';
                    return res.redirect('/register');
                })
        });
};