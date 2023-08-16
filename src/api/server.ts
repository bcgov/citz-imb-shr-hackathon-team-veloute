import app from "./express";
import Constants from "./constants";

const { API_PORT } = Constants;

app.listen(API_PORT, (err?: Error) => {
  if (err) console.log(err);
  console.info(`Server started on port ${API_PORT}.`);

});
