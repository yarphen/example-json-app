const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: parseInt(process.env.PORT, 10) || 3001,
  mysql: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    db: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  auth: {
    apiUrl: process.env.AUTH_URL,
  },
};
