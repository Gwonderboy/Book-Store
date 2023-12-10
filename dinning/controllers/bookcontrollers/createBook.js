"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = void 0;
const book_1 = require("../../model/book");
const createBook = async (req, res) => {
    try {
        const userId = req.user._id;
        const book = new book_1.Book({
            ...req.body,
            ownerId: userId
        });
        await book.save();
        res.status(200).json({
            status: `Successful`,
            method: req.method,
            message: `Your book has been successfully created`,
            data: book,
        });
    }
    catch (error) {
        res.status(400).json({
            status: `error`,
            method: req.method,
            message: error.message,
        });
    }
};
exports.createBook = createBook;
