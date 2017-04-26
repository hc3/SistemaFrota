export default (sequelize, DataType) => {

  const Product = sequelize.define('Products', {
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
    cod_fornecedor: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    descricao: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Product.hasMany(models.Orders, {
          joinTable: 'order_products',
          foreignKey: 'product_id',
          constraints: false, 
          allowNull:true, 
          defaultValue:null
        });
      }
    }
  });
  return Product;
}