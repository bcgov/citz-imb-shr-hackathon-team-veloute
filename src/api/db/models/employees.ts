import { sequelize } from "../conn";
import { UUIDV4, DataTypes } from "sequelize";
import { Divisions } from "./divisions";
import { Positions } from "./positions";

export const Employees = sequelize.define(
  "Employees",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

Employees.hasMany(Employees);
Employees.belongsTo(Employees);
Employees.hasOne(Positions);
Employees.hasOne(Divisions);
