/**
 * Created by wotjd on 2016-12-13.
 */

import express from 'express';
import controller from './controller';

let router = express.Router();

router.get('/books', (req, res) => {
    controller.getAllBook(req, res);
});

router.get('/books/:book_id', (req, res) => {
    controller.getBook(req, res);
});

router.get('/books/author/:author', (req, res) => {
    controller.getBookByAuthor(req, res);
});

router.post('/books', (req, res) => {
    controller.createBook(req, res);
})

router.put('/books/:book_id', (req, res) => {
    controller.updateBook(req, res);
})

router.delete('/books/:book_id', (req, res) => {
    controller.deleteBook(req, res);
})

export default router;