import Vehicle from './Vehicles';

export default (sequelize,DataType) => {
  const Tires = sequelize.define('Tires',{
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    cod:{
      type:DataType.INTEGER,
      unique: true,
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
    vida: {
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    sulco: {
      type:DataType.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    recap: {
      type:DataType.BOOLEAN,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    trash: {
      type:DataType.BOOLEAN,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    }
  });
  Tires.belongsTo(sequelize.import('./Vehicles'),
  {
    foreignKey: 'vehicle_id',
    targetKey: 'id'
  });
  //Tires.hasOne(sequelize.import('./Vehicles'));
  return Tires;
}
