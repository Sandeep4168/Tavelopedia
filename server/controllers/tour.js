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
        res.status(404).json({message:"Something went wrong while creating a new tour"})
    }
}

export const getTour = async (req,res) =>{
    const {id} = req.params
    try {
        const tour = await TourModel.findById(id)
        res.status(200).json(tour)
    }catch(error){
        res.status(404).json({message:"Something went wrong while creating a new tour"})
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
