export default (sequelize, DataType) => {

  const Vehicles = sequelize.define('Vehicles', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    placa: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    modelo: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    marca: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    ano: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    km_inicial: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Vehicles.belongsTo(models.Drivers, {
          foreignKey: 'driver_id',
          targetKey: 'id',
          allowNull: true,
          unique: true
        });
        Vehicles.hasMany(models.Orders);
      }
    }
  });
  /*
  const Driver = sequelize.import('./Drivers');
  Vehicles.belongsTo(Driver ,
  {
    foreignKey: 'driver_id',
    targetKey: 'id',
    allowNull:true,
    unique:true
  });
  */
  return Vehicles;
}