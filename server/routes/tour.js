import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router()

import { createTour,getTours } from "../controllers/tour.js";

router.post("/",auth,createTour)
router.get("/",getTours)

export default router