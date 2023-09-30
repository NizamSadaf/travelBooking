import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/userController.js";
const router = express.Router()

import { verifyAdmin, verifyUser } from "../middleware/verifyUser.js";
import { verifyToken } from "../middleware/verifyToken.js";

router.get("/",verifyToken,verifyAdmin, getUsers)

router.get("/:id",verifyToken,verifyUser, getUser)

router.delete("/:id",verifyToken,verifyUser,  deleteUser)

router.patch("/:id",verifyToken,verifyUser, updateUser)

export default router