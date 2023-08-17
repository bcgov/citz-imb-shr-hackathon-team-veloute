import { sequelize } from "../conn";
import { DataTypes } from "sequelize";

export const Band = sequelize.define(
  "Band",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
