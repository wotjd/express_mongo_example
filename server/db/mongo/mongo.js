/**
 * Created by wotjd on 2016-12-13.
 */

import mongoose from 'mongoose';

let db = {
    mongo: mongoose.connection,
    listen: () => {
        db.mongo.on('error', console.error);
        db.mongo.once('open', () => console.log("connected to mongodb server"));
        mongoose.connect('mongodb://localhost/mongodb_tutorial');
    }
};

export default db;