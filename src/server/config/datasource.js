import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let database = null;

const loadModels = (sequelize) => {
    const dir = path.join(__dirname,'../models');
    let models = [];
    fs.readdirSync(dir).forEach(file => {
      console.log("File: ",file);
      console.log("Diretório:",dir);
      const modelDir = path.join(dir,file);
      console.log("ModelDir: ",modelDir);
      const model = sequelize.import(modelDir);
      console.log("Model: ",model);
      models[model.name] = model;
    });
    return models;
};

export default (app) => {
  if(!database) {
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
