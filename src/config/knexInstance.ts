import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexInstance = knex({
  client: "postgresql",
  connection: {
    host: "localhost",
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  },
});

export default knexInstance;
