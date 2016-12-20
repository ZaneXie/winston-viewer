/**
 * Created by xiezongjun on 2016-12-20.
 */

import Koa = require('koa');
import path = require('path');

import {Service} from "./src/service";

let app = new Koa();
app.use(Service({
    log_files: path.resolve(__dirname, '../shop-c-compiler-service/logs/*log*'),
    prefix:"/log"
}));
app.listen(3000);
