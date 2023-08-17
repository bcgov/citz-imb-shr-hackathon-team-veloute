import {
  getBands,
  getHistory,
  getMinistries,
  getSubmission,
  getTitles,
  postSubmission,
  searchPositionNumber,
} from "../controllers/db-controller";
import express from "express";

const router = express.Router();

router.route("/bands").get(getBands);
router.route("/titles").get(getTitles);
router.route("/ministries").get(getMinistries);
router.route("/history").get(getHistory);
router.route("/searchPosition").get(searchPositionNumber);
router.route("/submission").get(getSubmission).post(postSubmission);

export default router;
