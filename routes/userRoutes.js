import { Router } from "express";

import { UserController } from "../controllers/UserController.js";


const userRouter = new Router();

userRouter.route("/")
  .get(UserController.getAll)
  .post(UserController.create);

userRouter.route("/:userId(\\d+)")
  .get(UserController.get)
  .put(UserController.update)
  .delete(UserController.delete);


export { userRouter };
