import app from "./express";

app.listen(5000, (err?: Error) => {
  if (err) console.log(err);
  console.info(`Server started on port 5000.`);
});
