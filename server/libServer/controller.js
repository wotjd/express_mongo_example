/**
 * Created by wotjd on 2016-12-13.
 */

import Book from '../db/mongo/book';

let controller = { };

controller.getAllBook = (req, res) => {
    Book.find((err, books) => {
        if(err)
            return res.status(500).send({error : 'database failure'});
        res.json(books);
    });
};

controller.getBook = (req, res) => {
    Book.findOne({id : req.params.book_id}, (err, book) => {
        if(err)
            return res.status(500).json({error : err});
        if(!book)
            return res.status(404).json({error: 'book not found'});
        res.json(book);
    });
};

controller.getBookByAuthor = (req, res) => {
    Book.find({author: req.params.author}, {id: 0, title: 1, published_date: 1}, (err, books) => {
        if(err)
            return res.status(500).json({error: err});
        if(books.length === 0)
            return res.status(404).json({error: 'book not found'});
        res.json(books);
    });
};

controller.createBook = (req, res) => {
    let book = new Book();
    book.title = req.body.name;
    book.author = req.body.author;
    book.published_date = new Date(req.body.published_date);

    book.save((error) => {
        if(error){
            console.error(err);
            res.json({result: 0});
            return;
        }
        res.json({result: 1});
    });
};

controller.updateBook = (req, res) => {
    res.end();
};

controller.deleteBook = (req, res) => {
    res.end();
};

export default controller;