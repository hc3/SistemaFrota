import Vehicle from './Vehicles';
export default (sequelize, DataType) => {

  const Drivers = sequelize.define('Drivers', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cod: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    },
    phone: {
      type: DataType.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    },
    documento: {
      type: DataType.STRING,
      allowNull: false,
      validade: {
        notEmpty: true
      }
    },
    type: {
      type: DataType.ENUM('PHYSICAL','LEGAL'),
      allowNull: false,
      validade: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Drivers.hasMany(models.Vehicles, {
          foreignKey: 'driver_id'
        });
      }
    }
  });
  return Drivers;
}