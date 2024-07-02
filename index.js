import express from "express";

import { userRouter } from "./routes/userRoutes.js"

import { handleAnyError, handlePropertyRequiredError }
  from "./middleware/errorHandling.js";
import { handleUserNotExistError }
  from "./middleware/userErrorHandling.js";


const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/users", userRouter);

app.use(handleUserNotExistError);
app.use(handlePropertyRequiredError);
app.use(handleAnyError);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}...`);
});
