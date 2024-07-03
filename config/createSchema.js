import pg from "pg";


const client = new pg.Client();

try {
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name CHARACTER VARYING(50) NOT NULL,
      age SMALLINT NOT NULL
    );
  `);

  console.log("DB schema created successfully.");
} catch (error) {
  console.error(error);
} finally {
  await client.end();
}
