import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router()

import {
    createTour,
    deleteTour,
    getTour,
    getTours,
    getToursBySearch,
    getToursByUser,
    updateTour,
  } from "../controllers/tour.js";
  
  router.get("/search", getToursBySearch);
  router.get("/", getTours);
  router.get("/:id", getTour);
  
  router.post("/", auth, createTour);
  router.delete("/:id", auth, deleteTour);
  router.patch("/:id", auth, updateTour);
  router.get("/userTours/:id", auth, getToursByUser);


export default router