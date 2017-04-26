export default (sequelize, DataType) => {

    const OrderProducts = sequelize.define('Order_Products', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                OrderProducts.belongsTo(models.Orders, {
                    foreignKey: 'order_id',
                    targetKey: 'id',
                    allowNull: false
                });
                OrderProducts.belongsTo(models.Products, {
                    foreignKey: 'product_id',
                    targetKey: 'id',
                    allowNull: false
                })
            }
        }
    });
    return OrderProducts;
}