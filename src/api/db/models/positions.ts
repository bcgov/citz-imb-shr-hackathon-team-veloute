import { sequelize } from "../conn";
import { UUIDV4, DataTypes } from "sequelize";
import { Band } from "./bands";
import { Titles } from "./titles";
import { Divisions } from "./divisions";
import { Employees } from "./employees";

export const Positions = sequelize.define(
  "Positions",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    positionNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

Positions.hasOne(Band);
Positions.hasOne(Titles);
Positions.hasOne(Divisions);
Positions.hasMany(Employees);
