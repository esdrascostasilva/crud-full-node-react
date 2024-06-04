import express from "express";
import { getUsers, getUsersById, addUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router()

router.get("/users", getUsers)
router.get("/users/:id", getUsersById)
router.post("/users", addUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)


export default router;
