import health from './health';
import keys from './json-files';

export default (app) => {
  health(app);
  keys(app);
};
