/**
 * Created by wotjd on 2016-12-13.
 */

import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes'

let libServer = {
    app: null,
    listen: () => {
        let port = 3000;
        libServer.app = express();

        libServer.app.use(bodyParser.urlencoded({extended: true}));
        libServer.app.use(bodyParser.json());

        libServer.routes(libServer.app);

        libServer.app.listen(port, () => {
            console.log("Express server has started on port " + port);
        });
    },
    routes: (app) => {
        app.get('/about', function(req, res){
            res.send('This is express example');
        });
        app.use('/', routes);
    }
};

export default libServer;