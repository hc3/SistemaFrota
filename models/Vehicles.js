import driver from './Drivers';

export default (sequelize, DataType) => {

  const Vehicles = sequelize.define('Vehicles', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    placa:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    modelo:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    marca:{
      type:DataType.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    eixos:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    km_inicial:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    km_atual:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    km_rodado:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    driver_id: {
      type:DataType.INTEGER,
      references: {
          model: motorista,
          key: 'id',
      }
  }
  });
  const motorista = sequelize.import('./Drivers');
  Vehicles.belongsTo(motorista, {foreignKey: 'driver_id'});
  return Vehicles;
}
