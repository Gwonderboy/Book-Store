import express from "express";
import { registerUser } from "../controllers/usercontrollers/users"; 
import { userLogin } from "../controllers/usercontrollers/userLogin";
import { deleteUser } from "../controllers/usercontrollers/deleteUser";
import { singleUser } from "../controllers/usercontrollers/singleUser";
import { retrieveAllUsers } from "../controllers/usercontrollers/retrieveAllUsers";
import { authoriser } from "../middleware/authorization";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/getAllUsers", authoriser, retrieveAllUsers);
router.get("/getUser/:id", authoriser, singleUser);
router.delete("/delete/:id", authoriser, deleteUser);
export default router;
