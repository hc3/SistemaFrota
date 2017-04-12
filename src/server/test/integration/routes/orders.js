import jwt from 'jwt-simple';
import callback from './callback-integration';

describe('# TEST INTEGRATION # Routes Orders', () => {

    const Products = app.datasource.models.Products;
    const Drivers = app.datasource.models.Drivers;
    const Vehicles = app.datasource.models.Vehicles;
    const Orders = app.datasource.models.Orders;
    const Users = app.datasource.models.Users;
    const jwtSecret = app.config.jwtSecret;
    let token;

    const defaultProduct1 = {
        id: 1,
        cod: 990,
        cod_fornecedor: '10900',
        descricao: 'rebiboca da parafuseta'
    }
    const defaultProduct2 = {
        id: 2,
        cod: 990,
        cod_fornecedor: '10900',
        descricao: 'rebiboca da parafuseta'
    }
    const defaultProduct3 = {
        id: 3,
        cod: 990,
        cod_fornecedor: '10900',
        descricao: 'rebiboca da parafuseta'
    }
    const defaultProduct4 = {
        id: 4,
        cod: 990,
        cod_fornecedor: '10900',
        descricao: 'rebiboca da parafuseta'
    }

    const listProducts = [defaultProduct1,defaultProduct2,defaultProduct3,defaultProduct4];

    const defaultDriver = {
        id: 1,
        cod: 800,
        name: 'test driver',
        phone: '99801147',
        endereco: 'rua 01 bairro x',
        bairro: 'bairro 001',
        cidade: 'cidade 002',
        estado: 'estado 001',
        email: 'teste2@mail.com',
        documento: '05288900989',
        type: 'PHYSICAL'
    }

    const defaultVehicle = {
        id: 1,
        placa: 'TXT-8890',
        modelo: 'FORD CARGO 1723',
        marca: 'FORD',
        ano: 4,
        km_inicial: 0,
        driver_id: defaultDriver.id
    };

        const defaultVehicle2 = {
        id: 2,
        placa: 'ABC-8890',
        modelo: 'FORD CARGO 1723',
        marca: 'FORD',
        ano: 4,
        km_inicial: 0,
        driver_id: defaultDriver.id
    };

    const defaultOrder = {
        id: 1,
        data: '2017-12-04T03:00:00.000Z',
        km_atual: 5633,
        valor_servico: 556,
        valor_produto: 400,
        valor_desconto: 200,
        valor_total: 1000,
        comentario: 'criando teste para OS',
        vehicle_id: defaultVehicle.id
    }

    const ROTA = '/orders';
    const ROTA_ID = '/orders/1';

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
                    .then(() => Products.create(defaultProduct1))
                    .then(() => Products.create(defaultProduct2))
                    .then(() => Products.create(defaultProduct3))
                    .then(() => Products.create(defaultProduct4));
                Drivers
                    .destroy({
                        where: {}
                    })
                    .then(() => Drivers.create(defaultDriver));
                Vehicles
                    .destroy({
                        where: {}
                    })
                    .then(() => Vehicles.create(defaultVehicle))
                    .then(() => Vehicles.create(defaultVehicle2));
                Orders
                    .destroy({
                        where: {}
                    })
                    .then(() => Orders.create(defaultOrder))
                    .then(() => {
                        token = jwt.encode({
                            id: user.id
                        }, jwtSecret);
                        done();
                    })
            })

    });

    describe('Route get /Orders', () => {
        it('should return a list of Orders', done => callback.defaultGet(done, request, token, defaultOrder, ROTA))
    });

    describe('Route POST /Orders', () => {
        const createdOrder = {
            id: 2,
            data: '2017-12-04T03:00:00.000Z',
            km_atual: 5633,
            valor_servico: 556,
            valor_produto: 400,
            valor_desconto: 200,
            valor_total: 1000,
            comentario: 'criando teste para OS',
            vehicle_id: 2,
            products: listProducts
        };
        it('should create a Orders', done => callback.defaultPost(done, request, token, createdOrder, ROTA))
    });

    describe('Route GET /Orders/:id', () => {
        it('should find a one Orders', done => callback.defaultGetOne(done, request, token, defaultOrder, ROTA_ID))
    });

    describe('Route PUT /Orders/:id', () => {
        const updatedOrder = {
            id: 2,
            data: '2017-12-04T03:00:00.000Z',
            km_atual: 5633,
            valor_servico: 556,
            valor_produto: 400,
            valor_desconto: 200,
            valor_total: 1000,
            comentario: 'UPDATED',
            vehicle_id: 2
        };
        it('should update a Orders', done => callback.defaultPut(done, request, token, updatedOrder, ROTA_ID));
    });

    describe('Route DELETE /Orders/:id', () => {
        it('should delete a Orders', done => callback.defaultGetOne(done, request, token, defaultOrder, ROTA_ID))
    });
})