import { sequelize } from "../conn";
import { UUIDV4, DataTypes } from "sequelize";
// import { Positions } from "./positions";

export const Bands = sequelize.define(
  "Bands",
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
    minValue: {
      type: DataTypes.INTEGER,
    },
    maxValue: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // Other model options go here
  }
);

// Bands.belongsTo(Positions, { as: "Positions", foreignKey: "id" });
