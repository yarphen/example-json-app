import config from 'config';
import Sequelize from 'sequelize';
import logger from '../utils/logger';
import jsonFileModel from './json-files';

const { mysql } = config;

const sequelize = new Sequelize(
  mysql.db,
  mysql.username,
  mysql.password,
  {
    dialect: 'mysql',
    port: mysql.port,
    host: mysql.host,
  },
);

const jsonFile = jsonFileModel(sequelize);

sequelize.sync().then(() => {
  logger.info('DB connected');
}).catch((err) => {
  logger.error('An error occured', err);
});

export default {
  models: {
    jsonFile,
  },
  sequelize,
};
