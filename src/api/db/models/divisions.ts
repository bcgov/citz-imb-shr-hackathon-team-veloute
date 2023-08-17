import { sequelize } from "../conn";
import { UUIDV4, DataTypes } from "sequelize";
import { Ministries } from "./ministries";

export const Divisions = sequelize.define(
  "Divisions",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

Divisions.belongsTo(Ministries);
