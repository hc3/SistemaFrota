export default (sequelize, DataType) => {

    const Orders = sequelize.define('Orders', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        km_atual: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                Orders.belongsTo(models.Vehicles,{
                    foreignKey: 'vehicle_id',
                    targetKey: 'id',
                    allowNull: true,
                    unique: true
                });
                //Orders.belongsToMany(models.Products);
            }
        }
    });

    return Orders;
}