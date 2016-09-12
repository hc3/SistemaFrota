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
    km_rodado:{
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  });
  const Driver = sequelize.import('./Drivers');
  Vehicles.belongsTo(Driver ,
  {
    foreignKey: 'driver_id',
    targetKey: 'id',
    allowNull:true,
    unique:false
  });
  //Vehicles.hasMany(sequelize.import('./Tires'),{foreignKey: 'vehicle_id'});
  return Vehicles;
}
