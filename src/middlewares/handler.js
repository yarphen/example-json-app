export const handler = (asyncFn) => async (req, res, next) => {
  try {
    await asyncFn(req, res);
  } catch (e) {
    next(e);
  }
};
