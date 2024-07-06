import { DataSource } from "typeorm";

import { User } from "../models/User.js";


const pgDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST || "localhost",
    port: +(process.env.PGPORT || 5432),
    database: process.env.PGDATABASE,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    entities: [
      User,
    ],
    synchronize: true,
});

try {
  await pgDataSource.initialize();

  console.log("PG Data Source has been initialized successfully.");
} catch (error) {
  console.warn("Error during PG Data Source initialization.");
  console.error(error);
}


export { pgDataSource };
