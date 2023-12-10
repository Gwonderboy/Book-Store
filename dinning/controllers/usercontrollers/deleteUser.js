"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const user_1 = require("../../model/user");
const deleteUser = async (request, response) => {
    try {
        const id = request.params.id;
        const user = await user_1.User.deleteOne({ _id: request.params.id });
        if (!id) {
            return response.status(400).json({
                status: 'Bad request',
                message: 'User ID is required for deletion'
            });
        }
        if (user.deletedCount === 0) {
            return response.status(400).json({
                status: 'Failed',
                message: 'User does not exist'
            });
        }
        return response.status(200).json({
            status: `Successful`,
            message: `This user has been deleted successfully.`,
        });
    }
    catch (err) {
        console.log(err.message);
        response.status(500).json({
            message: `Internal Server Error`
        });
    }
};
exports.deleteUser = deleteUser;
