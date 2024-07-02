import express from "express";

import { userRouter } from "./routes/userRoutes.js"

import { handleAnyError } from "./middleware/errorHandling.js";


const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/users", userRouter);

app.use(handleAnyError);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}...`);
});
