"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/usercontrollers/users");
const userLogin_1 = require("../controllers/usercontrollers/userLogin");
const deleteUser_1 = require("../controllers/usercontrollers/deleteUser");
const singleUser_1 = require("../controllers/usercontrollers/singleUser");
const retrieveAllUsers_1 = require("../controllers/usercontrollers/retrieveAllUsers");
const authorization_1 = require("../middleware/authorization");
const router = express_1.default.Router();
router.post("/register", users_1.registerUser);
router.post("/login", userLogin_1.userLogin);
router.get("/getAllUsers", authorization_1.authoriser, retrieveAllUsers_1.retrieveAllUsers);
router.get("/getUser/:id", authorization_1.authoriser, singleUser_1.singleUser);
router.delete("/delete/:id", authorization_1.authoriser, deleteUser_1.deleteUser);
exports.default = router;
