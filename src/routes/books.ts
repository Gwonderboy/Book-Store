import express from 'express';
import { createBook } from '../controllers/bookcontrollers/createBook';
import { deleteBook } from '../controllers/bookcontrollers/deleteBook';
import { editBook } from '../controllers/bookcontrollers/editBook';
import { authoriser } from '../middleware/authorization';
import { retrieveSingleBook } from '../controllers/bookcontrollers/retrieveSingleBook';
import { retrieveAllBooks } from '../controllers/bookcontrollers/retrieveAllBooks';

const router = express.Router()


router.post('/create', authoriser, createBook)
router.put('/edit/:id', authoriser, editBook)
router.delete('/delete/:id', authoriser, deleteBook)
router.get('/single_book/:id', authoriser, retrieveSingleBook)
router.get('/all_books', authoriser, retrieveAllBooks)

export default router