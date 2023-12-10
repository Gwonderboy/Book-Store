"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveAllBooks = void 0;
const book_1 = require("../../model/book");
const retrieveAllBooks = async (request, response) => {
    try {
        const bookInfo = await book_1.Book.find({});
        if (!bookInfo) {
            return response.status(404).json({
                message: `Book not valid`,
            });
        }
        return response.status(200).json({ message: `Books fetched successfully`, bookInfo });
    }
    catch (err) {
        return response.status(500).json({
            message: err.message
        });
    }
};
exports.retrieveAllBooks = retrieveAllBooks;
