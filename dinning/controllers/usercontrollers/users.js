"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../../model/user");
const helpers_1 = require("../../utilities/helpers");
const registerUser = async (req, res, next) => {
    try {
        const hash = await (0, helpers_1.hashPassword)(req.body.password);
        const user = new user_1.User({
            ...req.body,
            password: hash,
        });
        await user.save();
        res.status(200).json({
            status: `Successful`,
            method: req.method,
            message: `You have been successfully registered`,
            data: user
        });
    }
    catch (error) {
        res.status(400).json({
            status: `error`,
            method: req.method,
            message: error.message
        });
    }
};
exports.registerUser = registerUser;
