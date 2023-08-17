import { sequelize } from "../conn";
import { UUIDV4, DataTypes } from "sequelize";
import { Positions } from "./positions";
import { Employees } from "./employees";
import { Divisions } from "./divisions";

export const HM_input = sequelize.define(
  "HM_input",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Other model options go here
  }
);

HM_input.hasOne(Positions);
HM_input.hasMany(Employees);
HM_input.hasOne(Divisions);
