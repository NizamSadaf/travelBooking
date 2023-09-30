import  express  from "express";
import { addReview } from "../controller/reviewController.js";
import { verifyUser } from "../middleware/verifyUser.js";
import { verifyToken } from "../middleware/verifyToken.js";



const router = express.Router()


router.post("/:tourId",addReview)




//router.post("/", addTodoValidators, addTodoValidationHandler, addTodo)



export default router