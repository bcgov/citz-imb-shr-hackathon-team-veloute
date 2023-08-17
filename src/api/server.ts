import app from "./express";
import Constants from "./constants";
import { sequelize } from "./db/conn";
import { Band } from "./db/models/bands";

const { API_PORT } = Constants;

app.listen(API_PORT, async (err?: Error) => {
  if (err) console.log(err);
  console.info(`Server started on port ${API_PORT}.`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // await sequelize.sync({ alter: true }); // should be for all, but not working quite right. Use individual sync as shown below.
    await Band.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
