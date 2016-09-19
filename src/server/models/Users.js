import bcrypt from 'bcrypt-nodejs';

export default (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

  },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync(); // GERA O SALT
          user.set('password', bcrypt.hashSync(user.password, salt)); // SETA NOVA SENHA
        },
      },
      classMethods: {
        isPassword: (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword),
      },
    });
  return Users;
};
