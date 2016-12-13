/**
 * Created by wotjd on 2016-12-13.
 */

import mongoose from 'mongoose';

let schema = mongoose.Schema;
let bookSchema = new schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now}
});

export default mongoose.model('book', bookSchema);