import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router()

<<<<<<< HEAD
import { createTour,getTours,getTour,getToursByUser,deleteTour,updateTour } from "../controllers/tour.js";
=======
import { createTour,getTours,getTour,getToursByUser } from "../controllers/tour.js";
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e

router.post("/",auth,createTour)
router.get("/",getTours)
router.get("/:id",getTour)
<<<<<<< HEAD
router.delete("/:id",auth,deleteTour)
router.patch("/:id",auth,updateTour)




=======
>>>>>>> 4d304d5f835f5fc723bff289fcfbcca42a78d65e
router.get("/userTours/:id",auth,getToursByUser)

export default router