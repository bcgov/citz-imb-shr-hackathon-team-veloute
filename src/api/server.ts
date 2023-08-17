import app from "./express";
import Constants from "./constants";
import { sequelize } from "./db/conn";
import { Bands } from "./db/models/bands";
import { Divisions } from "./db/models/divisions";
import { Employees } from "./db/models/employees";
import { Ministries } from "./db/models/ministries";
import { Positions } from "./db/models/positions";
import { Titles } from "./db/models/titles";
import { HM_input } from "./db/models/HM_input";

const { API_PORT } = Constants;

app.listen(API_PORT, async (err?: Error) => {
  if (err) console.log(err);
  console.info(`Server started on port ${API_PORT}.`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // await sequelize.sync({ alter: true }); // should be for all, but not working quite right. Use individual sync as shown below.
    await Titles.sync({ alter: true });
    await Bands.sync({ alter: true });
    await Ministries.sync({ alter: true });
    await Employees.sync({ alter: true });
    await Divisions.sync({ alter: true });

    await Positions.sync({ alter: true });
    await HM_input.sync({ alter: true });

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
