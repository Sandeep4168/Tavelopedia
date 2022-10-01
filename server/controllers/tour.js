import express from "express"
import mongoose from "mongoose"
import TourModel from "../models/tour.js"

export const createTour = async (req,res) => {
    const tour = req.body

    const newTour = new TourModel({
        ...tour,
        creator:req.userId,
        createdAt : new Date().toISOString(),
    })

    try{
       await newTour.save()
       res.status(201).json(newTour)
    }catch(error){
        res.status(404).json({message:"Something went wrong while creating a new tour"})
    }


}

export const getTours = async (req,res) =>{
    try {
        const tours = await TourModel.find()
        res.status(200).json(tours)
    }catch(error){
        res.status(404).json({message:"Something went wrong while getting all tours"})
    }
}

export const getTour = async (req,res) =>{
    const {id} = req.params
    try {
        const tour = await TourModel.findById(id)
        res.status(200).json(tour)
    }catch(error){
        res.status(404).json({message:"Something went wrong while getting a single tour"})
    }
}

export const getToursByUser = async (req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"User doesn't exist"})
    }

    const userTours = await TourModel.find({creator:id})
    res.status(200).json(userTours)



    
}

export const deleteTour = async (req,res) =>{
    const {id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:`No tour exist with id: ${id}`})
        }
    
        await TourModel.findByIdAndRemove(id)
        res.json({message:"Tour Deleted successfully"})

    }catch(error){
        res.status(404).json({message:"Something went wrong while deleting tour"})

    }

   
}

export const updateTour = async (req,res) =>{
    const {id} = req.params;
    const {title,description,creator,imageFile,tags} = req.body
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:`No tour exist with id: ${id}`})
        }
    
        const updatedTour = {
            creator,
            title,
            description,
            tags,
            imageFile,
            _id:id
        }

        await TourModel.findByIdAndUpdate(id,updatedTour,{new:true})
        res.json(updatedTour)

    }catch(error){
        res.status(404).json({message:"Something went wrong while updating tour"})

    }

   
}

export const getToursBySearch = async (req, res) => {
    const { searchQuery } = req.query;
    try {
      const title = new RegExp(searchQuery, "i");
      const searchTours = await TourModel.find({ title });
      res.json(searchTours);
    } catch (error) {
      res.status(404).json({ message: "Something went wrong while searching the tours" });
    }
  };


