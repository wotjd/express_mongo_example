/**
 * Created by wotjd on 2016-12-13.
 */

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'

let libServer = {
    app: null,
    listen: () => {
        libServer.app = express();

        libServer.app.use(bodyParser.urlencoded({extended: true}));
        libServer.app.use(bodyParser.json());

        libServer.routes(libServer.app);

        libServer.app.listen(process.env.PORT || 3000, () => {
            console.log("Express serverhas started on port " + port);
        });
    },
    routes: (app) => {
        app.use('/', routes);
    }
}