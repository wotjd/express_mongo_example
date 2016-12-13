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
    book.title = req.body.title;
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
    Book.findById(req.params.book_id, (err, book) => {
        if(err)
            return res.status(500).json({ error: 'database failure' });
        if(!book)
            return res.status(404).json({ error: 'book not found' });

        if(req.body.title)
            book.title = req.body.title;
        if(req.body.author)
            book.author = req.body.author;
        if(req.body.published_date)
            book.published_date = req.body.published_date;

        book.save((err) => {
            if(err)
                res.status(500).json({error: 'failed to update'});
            res.json({message: 'book updated'});
        });

    });
};

/*
 // UPDATE THE BOOK (ALTERNATIVE)
 app.put('/api/books/:book_id', function(req, res){
 Book.update({ _id: req.params.book_id }, { $set: req.body }, function(err, output){
 if(err) res.status(500).json({ error: 'database failure' });
 console.log(output);
 if(!output.n) return res.status(404).json({ error: 'book not found' });
 res.json( { message: 'book updated' } );
 })
 });
 */

controller.deleteBook = (req, res) => {
    Book.remove({_id: req.params.book_id }, function(err){
        if(err) return res.status(500).json({ error: "database failure" });

        /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
         if(!output.result.n) return res.status(404).json({ error: "book not found" });
         res.json({ message: "book deleted" });
         // idempotent : 존재하지 않는 도큐멘트를 삭제하더라도 달라지는 것이 없다
         */

        res.status(204).end();
    });
};

export default controller;