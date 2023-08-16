import app from "./express";

app.listen(6000, (err?: Error) => {
  if (err) console.log(err);
  console.info(`Server started on port 6000.`);
});
