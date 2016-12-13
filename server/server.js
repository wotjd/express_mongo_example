/**
 * Created by wotjd on 2016-12-13.
 */

import mongoDB from './db/mongo/mongo';
import libServer from './libServer';

mongoDB.listen();
libServer.listen();