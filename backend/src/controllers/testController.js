const getTestMessage = (req, res) => {
  res.json({
    message: "Controller Working Successfully",
  });
};

const getError = (req, res, next) => {
  const error = new Error("This is a test error");

  error.status = 400;

  next(error);
};

module.exports = {
  getTestMessage,
  getError,
};