import { handler } from '../../middlewares/handler';

const health = async (req, res) => {
  res.status(200).json({ message: 'OK' });
};

export default (app) => {
  app.get('/health', handler(health));
};
