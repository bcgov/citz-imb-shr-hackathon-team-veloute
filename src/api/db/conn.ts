import { Sequelize } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_PORT } = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_USER}`
);
