import pg from "pg";


const dbClient = new pg.Client();

try {
  await dbClient.connect();

  console.log("Client connected successfully.");
} catch (error) {
  console.error(error);
  console.warn("Client is not ready to use.");
}


export { dbClient };
