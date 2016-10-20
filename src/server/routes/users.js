import UsersController from '../controllers/users';

export default (app) => {
    const usersController = new UsersController(app.datasource.models.Users);

    app.route('/users')
      .get((req, res) => {
          usersController.listAll()
              .then(response => {
                  res.status(response.statusCode);
                  res.json(response.data);
              });
      })
      .post((req, res) => {
          usersController.create(req.body)
              .then(response => {
                  res.status(response.statusCode);
                  res.json(response.data);
                  //res.redirect('/login');
              });
      });


    app.route('/users/:id')
      .get((req, res) => {
          usersController.getById(req.params)
              .then(response => {
                  res.status(response.statusCode);
                  res.json(response.data);
              });
      })
      .put((req, res) => {
          usersController.update(req.body, req.params)
              .then(response => {
                  res.status(response.statusCode);
                  res.json(response.data);
              });
      })
      .delete((req, res) => {
          usersController.remove(req.params)
              .then(response => {
                  res.sendStatus(response.statusCode);
              });
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
            res.statusCode(response.statusCode);
            req.session.error = 'Erro ao realizar registro';
            return res.redirect('/register');
          })
      });
};
