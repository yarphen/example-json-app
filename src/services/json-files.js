import { Op } from 'sequelize';
import models from '../models';

const {
  models: {
    jsonFile,
  },
} = models;

export const listJsonFiles = (query) => jsonFile.findAll(query ? {
  where: {
    [Op.or]: [
      {
        name: {
          [Op.startsWith]: query,
        },
      },
      {
        description: {
          [Op.startsWith]: query,
        },
      },
    ],
  },
  attributes: ['id', 'name', 'description'],
} : { attributes: ['id', 'name', 'description'] });

export const getJsonFile = (id) => jsonFile.findOne({
  where: {
    id,
  },
});

export const createJsonFile = (jsonFileData) => jsonFile.create(jsonFileData);

export const deleteJsonFile = (id) => jsonFile.destroy({ id });
