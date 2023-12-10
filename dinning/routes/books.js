"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createBook_1 = require("../controllers/bookcontrollers/createBook");
const deleteBook_1 = require("../controllers/bookcontrollers/deleteBook");
const editBook_1 = require("../controllers/bookcontrollers/editBook");
const authorization_1 = require("../middleware/authorization");
const retrieveSingleBook_1 = require("../controllers/bookcontrollers/retrieveSingleBook");
const retrieveAllBooks_1 = require("../controllers/bookcontrollers/retrieveAllBooks");
const router = express_1.default.Router();
router.post('/create', authorization_1.authoriser, createBook_1.createBook);
router.put('/edit/:id', authorization_1.authoriser, editBook_1.editBook);
router.delete('/delete/:id', authorization_1.authoriser, deleteBook_1.deleteBook);
router.get('/single_book/:id', authorization_1.authoriser, retrieveSingleBook_1.retrieveSingleBook);
router.get('/all_books', authorization_1.authoriser, retrieveAllBooks_1.retrieveAllBooks);
exports.default = router;
