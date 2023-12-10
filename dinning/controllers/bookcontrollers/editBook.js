"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editBook = void 0;
const book_1 = require("../../model/book");
const editBook = async (request, response) => {
    try {
        const id = request.params.id;
        const book = await book_1.Book.updateOne({ _id: request.params.id }, request.body);
        if (!id) {
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required for get book'
            });
        }
        if (!book) {
            return response.status(404).json({
                message: `Book not valid`,
            });
        }
        return response.status(200).json({
            status: `Operation successful`,
            message: `This book has been edited successfully.`,
            data: book,
        });
    }
    catch (err) {
        response.status(500).json({
            message: err.message
        });
    }
};
exports.editBook = editBook;
