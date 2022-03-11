export function basicErrorHandler(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get("env") === "development" ? error : {};

  // render the error page
  response.status(error.status || 500);
}


