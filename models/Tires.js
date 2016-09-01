export default (sequelize,DataType) => {
  const Tires = sequelize.define('Tires',{
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    cod:{
      type:DataType.INTEGER,
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
    }
  });
  return Tires;
}
