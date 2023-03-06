import Sequelize from 'sequelize';

export default (sequelize) => {
  const JsonFile = sequelize.define('JsonFile', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jsonFile: {
      type: Sequelize.JSON,
      allowNull: false,
    },
  });

  return JsonFile;
};
