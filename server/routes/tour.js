import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router()

import { createTour,getTours,getTour,getToursByUser,deleteTour,updateTour } from "../controllers/tour.js";

router.post("/",auth,createTour)
router.get("/",getTours)
router.get("/:id",getTour)
router.delete("/:id",auth,deleteTour)
router.patch("/:id",auth,updateTour)




router.get("/userTours/:id",auth,getToursByUser)

export default router