/**
 * Created by wotjd on 2016-12-13.
 */

import mongoose from 'mongoose';
import book from './book';

let db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => console.log("connected to mongodb server"));
mongoose.connect('mongodb://localhost/mongodb_tutorial');