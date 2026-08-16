import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../Controllers/tourControllers.js'

import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//Create new tour 
router.post('/', verifyAdmin, createTour)

//Update tour 
router.put('/:id', verifyAdmin, updateTour)

//Delete tour 
router.delete('/:id', verifyAdmin, deleteTour)

//Get single tour 
router.get('/:id', getSingleTour)

//Get all tour 


router.get('/', getAllTour)

//Get tour by search
//http://localhost:5000/api/v1/tours/search/getTourBySearch?city=Bangkok&distance=500&maxGroupSize=8
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)




export default router