export function basicErrorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render("error");
}


export function handle404() {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
}
