import express from "express";
import cors from "cors";
import pg from "pg";

import { userRouter } from "./routes/userRoutes.js"

import { handleAnyError, handlePropertyRequiredError }
  from "./middleware/errorHandling.js";
import { handleUserNotExistError }
  from "./middleware/userErrorHandling.js";

import { setPgTypeParsers } from "./utils/pgTypeParsers.js";


const app = express();
const port = +process.env.PORT || 3000;

/* CORS allowed origins */
const allowed_origins = [
  "*",
];

const corsOptions = {
  origin: allowed_origins,
  methods: "OPTIONS,GET,HEAD,PUT,POST,DELETE"
};

/* CORS */
app.use(cors(corsOptions));

/* JSON body parsing */
app.use(express.json());

/* Setting routers */
app.use("/users", userRouter);

/* Error-handling middleware */
app.use(handleUserNotExistError);
app.use(handlePropertyRequiredError);
app.use(handleAnyError);

/* Start app */
app.listen(port, () => {
  console.log(`Listening on localhost:${port}...`);
});

/* Setting custom Postgres type parsers. */
setPgTypeParsers(pg);
