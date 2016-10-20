import jwt from 'jwt-simple';

describe('# TEST INTEGRATION # Routes users', () => {

    const Users = app.datasource.models.Users;
    const jwtSecret = app.config.jwtSecret;

    let token;

    const defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'teste@mail.com',
        password: 'teste'
    }

    beforeEach(done => {
      Users
        .destroy({where: {}})
        .then(() => Users.create(defaultUser))
        .then(user => {
              token = jwt.encode({id: user.id}, jwtSecret);
              done();
            })
        })

    describe('Route GET /users', () => {
        it('should return a list of users', done => {
            request
                .get('/users')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    expect(res.body[0].id).to.be.eql(defaultUser.id);
                    expect(res.body[0].name).to.be.eql(defaultUser.name);
                    expect(res.body[0].email).to.be.eql(defaultUser.email);
                    done(err);
                });
        });
    });

    describe('Route GET /users/:id', () => {
        it('should find a one user', done => {
            request
                .get('/users/1')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    expect(res.body.id).to.be.eql(defaultUser.id);
                    expect(res.body.name).to.be.eql(defaultUser.name);
                    expect(res.body.email).to.be.eql(defaultUser.email);
                    done(err);
                });
        });
    });

    describe('Route POST /users', () => {
        it('should create a User', done => {
            const newUser = {
                id: 2,
                name: 'Default User 2',
                email: 'teste2@mail.com',
                password: 'teste2'
            }
            request
                .post('/users')
                .set('Authorization', `JWT ${token}`)
                .send(newUser)
                .end((err, res) => {
                    expect(res.body.name).to.be.eql(newUser.name);
                    expect(res.body.email).to.be.eql(newUser.email);
                    done(err);
                });
        });
    });

    describe('Route PUT /users/:id', () => {
        it('should update a User', done => {
            const updatedUser = {
                id: 1,
                name: 'Updated User 2',
                email: 'teste2Updated@mail.com',
                password: 'teste2Updated'
            }
            request
                .put('/users/1')
                .set('Authorization', `JWT ${token}`)
                .send(updatedUser)
                .end((err, res) => {
                    expect(res.body).to.be.eql([1]);
                    done(err);
                });
        });
    });

    describe('Route DELETE /users/:id', () => {
        it('should delete a User', done => {
            request
                .delete('/users/1')
                .set('Authorization', `JWT ${token}`)
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);
                    done(err);
                })
        })
    })

})
