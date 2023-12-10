"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const helpers_1 = require("../../utilities/helpers");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../../model/user");
const userLogin = async (req, res) => {
    try {
        //fetch the email and password from the frontend
        const { email, password } = req.body;
        const user = await user_1.User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: `Access denied`,
                message: `This email or password does not exist`,
            });
        }
        //check and compare passwords (user's password in database with incoming password)
        const validate = await bcryptjs_1.default.compare(password, user.password);
        if (validate) {
            const data = {
                _id: user._id,
                email: user.email,
            };
            console.log(data);
            const token = (0, helpers_1.generateToken)(data);
            return res.status(200).json({
                message: `Welcome back ${user.firstName}`,
                token,
                user,
            });
        }
        return res.status(400).json({
            status: `Error`,
            message: `Your email or password is invalid`,
        });
    }
    catch (err) {
        res.status(400).json({
            status: `Error`,
            method: req.method,
            message: err.message
        });
    }
};
exports.userLogin = userLogin;
