"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = void 0;
const book_1 = require("../../model/book");
const deleteBook = async (request, response) => {
    try {
        const id = request.params.id;
        const book = await book_1.Book.deleteOne({ _id: request.params.id });
        if (!id) {
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required for deletion'
            });
        }
        if (book.deletedCount === 0) {
            return response.status(400).json({
                status: 'Failed',
                message: 'Book does not exist'
            });
        }
        return response.status(200).json({
            status: `Successful`,
            message: `This book has been deleted successfully.`,
        });
    }
    catch (err) {
        response.status(500).json({
            message: err.message
        });
    }
};
exports.deleteBook = deleteBook;
