const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandlerMiddleware = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // check mongoose bad ObjectId error
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Resource not found";
    statusCode = 404;
  }

  res.status(statusCode).json({
    message,
    stack: (process.env.NODE_ENV = "production" ? "🧁" : err.stack),
  });
};

module.exports = {
  errorHandlerMiddleware,
  notFoundMiddleware,
};
