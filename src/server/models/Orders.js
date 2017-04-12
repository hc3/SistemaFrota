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
        },
        valor_servico: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        valor_produto: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        valor_desconto: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        valor_total: {
            type: DataType.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        comentario: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
            classMethods: {
                associate: function (models) {
                    Orders.belongsTo(models.Vehicles, {
                        foreignKey: 'vehicle_id',
                        targetKey: 'id',
                        allowNull: true,
                        unique: true
                    });
                    Orders.hasMany(models.Products, { as : 'Prodcuts'});
                }
            }
        });

    return Orders;
}