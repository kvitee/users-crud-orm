function handleAnyError(err, req, res, next) {
  res
    .status(500)
    .json(err);
}


export { handleAnyError };
