"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveAllUsers = void 0;
const user_1 = require("../../model/user");
const retrieveAllUsers = async (request, response) => {
    try {
        let usersData = await user_1.User.find({});
        if (!usersData)
            return response.status(404).json({
                message: `Database not valid`,
            });
        return response
            .status(200)
            .json({ message: `Users fetched successfully`, data: usersData });
    }
    catch (err) {
        return response.status(500).json({
            message: err.message,
        });
    }
};
exports.retrieveAllUsers = retrieveAllUsers;
