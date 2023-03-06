import fs from 'node:fs';
import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';

import logger from './utils/logger';
import routes from './routes';
import { UNAUTHORIZED } from './consts/auth';

const dir = './data';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyparser.json({ limit: 100 * 1024 * 1024 }));
app.use(bodyparser.urlencoded({ extended: true }));

routes(app);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error('Error:', err);
  if (err.message === UNAUTHORIZED) {
    res.status(401).json({ message: UNAUTHORIZED });
    return;
  }
  res.status(500).json({ message: err.message || 'Server error' });
});

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
