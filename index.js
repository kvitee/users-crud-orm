import express from "express";


const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response
    .status(200)
    .json({ message: "Hello, World" });
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}...`);
});
