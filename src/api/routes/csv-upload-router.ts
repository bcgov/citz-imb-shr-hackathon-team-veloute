import express from "express";
import { csvUpload } from "../controllers/csv-upload-controller";

const router = express.Router();

// Health-check endpoints
router.route("/upload").post(csvUpload);

export default router;
