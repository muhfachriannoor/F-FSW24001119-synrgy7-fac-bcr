import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
  client: "postgresql",
  connection: {
    host: "localhost",
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/database/migrations",
    extension: "ts",
  },
  seeds: {
    directory: "./src/database/seeds",
    extension: "ts",
  },
};

export default config;
