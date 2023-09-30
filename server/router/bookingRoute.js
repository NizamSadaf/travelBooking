import  express  from "express";

import { addBooking, getAllBooking, getBooking } from "../controller/bookingController.js";

import { verifyAdmin, verifyUser } from "../middleware/verifyUser.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router()


router.post("/",verifyToken,verifyUser,addBooking)

router.get("/:id",verifyToken,verifyUser,getBooking)

router.get("/",verifyToken,verifyAdmin,getAllBooking)


//router.post("/", addTodoValidators, addTodoValidationHandler, addTodo)



export default router