# SistemaFrota
aproveitar e vou colocar aqui algumas anotações para pesquisas futuras hehe...

quando eu digo:
````js
Vehicles.belongsTo(sequelize.import('./Drivers'),{foreignKey: 'driver_id', targetKey: 'id'});
````
estou dizendo que em veiculo é pra criar um campo chamado <b>driver_id</b> que receberá o targeKey ou seja recebera o campo <b>id</b> do model Drivers, agora quando sequelize criar a tabela Vehicles ele vai adicionar um novo campo chamado
driver_id maperado como foreing key vinda da tabela drivers.

 
