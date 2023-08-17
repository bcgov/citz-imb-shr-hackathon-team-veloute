import "dotenv/config.js";
import express from "express";
import cors from "cors";
import router from "./routes";

const app: express.Application = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api", router.healthRouter);
app.use("/api", router.csvUploadRouter);
app.use("/api", router.dbRouter);

export default app;
