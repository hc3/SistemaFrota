import jwt from 'jwt-simple';
import callback from './callback-integration';

describe('# TEST INTEGRATION # Routes Products', () => {

  const Products = app.datasource.models.Products;
  const Users = app.datasource.models.Users;
  const jwtSecret = app.config.jwtSecret;
  let token;

  const defaultProduct = {
    id: 1,
    cod: 990,
    cod_fornecedor: '10900',
    descricao: 'rebiboca da parafuseta'
  }

  const ROTA = '/products';
  const ROTA_ID = '/products/1';
  const ROTA_BY_COD = '/ProductByCodigo/990';

  beforeEach(done => {
    Users
      .destroy({
        where: {}
      })
      .then(() => Users.create({
        name: 'pepa',
        email: 'pepa@mail.com',
        password: '12345'
      }))
      .then(user => {
        Products
          .destroy({
            where: {}
          })
          .then(() => Products.create(defaultProduct))
          .then(() => {
            token = jwt.encode({
              id: user.id
            }, jwtSecret);
            done();
          })
      })

  });

  describe('Route get /Products', () => {
    it('should return a list of Products', done => callback.defaultGet(done, request, token, defaultProduct, ROTA))
  });

  describe('Route POST /Products', () => {
    const createdProduct = {
      id: 2,
      cod: 11,
      cod_fornecedor: '10900',
      descricao: 'rebiboca da parafuseta'
    };
    it('should create a Products', done => callback.defaultPost(done, request, token, createdProduct, ROTA))
  });

  describe('Route GET /Products/:id', () => {
    it('should find a one Products', done => callback.defaultGetOne(done, request, token, defaultProduct, ROTA_ID))
  });

  describe('Route GET /ProductByCodigo/:cod', () => {
    it('should find a one Products', done => callback.defaultGet(done, request, token, defaultProduct, ROTA_BY_COD))
  });

  describe('Route PUT /Products/:id', () => {
    const updatedProduct = {
      id: 2,
      cod: 11,
      cod_fornecedor: '10900',
      descricao: 'rebiboca da parafuseta'
    };
    it('should update a Products', done => callback.defaultPut(done, request, token, updatedProduct, ROTA_ID));
  });

  describe('Route DELETE /Products/:id', () => {
    it('should delete a Products', done => callback.defaultGetOne(done, request, token, defaultProduct, ROTA_ID))
  });

})