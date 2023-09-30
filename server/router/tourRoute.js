import  express  from "express";

import { addTour, deleteTour, getFeaturedTours, getTour, getTourCount, getTours, getToursBySearch, updateTour } from "../controller/tourController.js";

import { verifyUser,verifyAdmin } from "../middleware/verifyUser.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router()



router.post("/",verifyToken,verifyAdmin, addTour)

router.get("/",getTours)

//get tours by search
router.get("/search/getTourBySearch",getToursBySearch)

//get featured tours
router.get("/search/getFeaturedTours",getFeaturedTours)

//get tours count

router.get("/search/getTourCount",getTourCount)

router.get("/:id",getTour)

router.delete("/:id",verifyToken,verifyAdmin,deleteTour)

router.patch("/:id",verifyToken,verifyAdmin,updateTour)

//router.post("/", addTodoValidators, addTodoValidationHandler, addTodo)



export default router