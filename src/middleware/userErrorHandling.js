import { UserNotExistError } from "../exceptions/UserNotExist.js";


function handleUserNotExistError(err, req, res, next) {
  if (err instanceof UserNotExistError) {
    res.statusMessage = "User Not Exist";
    res.status(404).json(err);
  } else {
    next(err);
  }
}


export { handleUserNotExistError };
