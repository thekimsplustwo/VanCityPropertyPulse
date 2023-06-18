function asyncWrap(asyncController) {
  return async (req, res, next) => {
    try {
      await asyncController(req, res);
    } catch (error) {
      res.status(error.statusCode || 400).json({ message: error.message });
      next(error);
    }
  };
}

export default asyncWrap;
