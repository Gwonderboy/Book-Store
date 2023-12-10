"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleUser = void 0;
const user_1 = require("../../model/user");
const singleUser = async (request, response) => {
    try {
        //get the user id from the params
        const id = request.params._id;
        //read from database
        const userInfo = await user_1.User.findOne({ _id: request.params.id });
        if (!userInfo)
            return response.status(404).json({
                message: `Database not valid`,
            });
        return response.status(200).json({
            message: `User found successfully`,
            data: userInfo
        });
    }
    catch (err) {
        console.log(err.message);
        return response.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.singleUser = singleUser;
