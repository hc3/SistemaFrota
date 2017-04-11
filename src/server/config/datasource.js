import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let database = null;

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../models');
  let models = [];
  fs.readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file);
    const model = sequelize.import(modelDir);
    models[model.name] = model;
  });
  Object.keys(models).forEach(function (modelName) {
    if ("associate" in models[modelName]) {
      models[modelName].associate(models);
    }
  });
  return models;
};

export default (app) => {
  if (!database) {
    const config = app.config,
      sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config.params
      );
    database = {
      sequelize,
      Sequelize,
      models: {}
    };

    database.models = loadModels(sequelize);
    sequelize.sync().done(() => database);
  }
  return database;
};