const errorHandle = (error, req, res, next) => {
  const { status,  errorContent } = error;
  res.status(status).json({
    message: 'message',
    error: errorContent.message,
  });
};

module.exports = errorHandle;
