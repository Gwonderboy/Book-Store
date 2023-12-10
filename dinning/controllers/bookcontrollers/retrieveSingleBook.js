"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveSingleBook = void 0;
const book_1 = require("../../model/book");
const retrieveSingleBook = async (request, response) => {
    try {
        //get the book id from the params
        const id = request.params.id;
        const bookInfo = await book_1.Book.findOne({ _id: request.params.id });
        if (!id) {
            return response.status(400).json({
                status: 'Bad request',
                message: 'Book ID is required to view this page'
            });
        }
        if (!bookInfo) {
            return response.status(404).json({
                message: `Book not valid`,
            });
        }
        //return book
        return response.status(200).json({
            message: `${bookInfo.title} found successfully`,
            bookInfo
        });
    }
    catch (err) {
        return response.status(500).json({
            message: err.message
        });
    }
};
exports.retrieveSingleBook = retrieveSingleBook;
