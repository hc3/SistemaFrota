# SistemaFrota
aproveitar e vou colocar aqui algumas anotações para pesquisas futuras hehe...

quando eu digo:
````js
Vehicles.belongsTo(sequelize.import('./Drivers'),{foreignKey: 'driver_id', targetKey: 'id'});
````
estou dizendo que em veiculo é pra criar um campo chamado <b>driver_id</b> que receberá o targeKey ou seja recebera o campo <b>id</b> do model Drivers, agora quando sequelize criar a tabela Vehicles ele vai adicionar um novo campo chamado
driver_id maperado como foreing key vinda da tabela drivers.

fazer JOIN usando sequelize, o join ou a junção entre tabelas que é feita quando temos um relacionamento pode ser feito dessa maneira

````js
listAllWithJoin(driver) {
  return this.Vehicle.findAll({
    include: [{model: driver}]
  })
  .then(result => callback.defaultResponse(result))
  .catch(() => callback.errorResponse(error.message));
}
````
o método do controller que será chamado na rota recebe um model e ao executar o findAll passamos o parâmetro <b> {include: [{model: modelDoParametro}]}
