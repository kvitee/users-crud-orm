import { PropertyRequiredError } from "../exceptions/PropertyRequired.js";


function handleAnyError(err, req, res, next) {
  res
    .status(500)
    .json(err);
}

function handlePropertyRequiredError(err, req, res, next) {
  if (err instanceof PropertyRequiredError) {
    res
      .status(422)
      .json(err);
  } else {
    next(err);
  }
}


export { handleAnyError, handlePropertyRequiredError };
