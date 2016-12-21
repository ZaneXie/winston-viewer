/**
 * Created by xiezongjun on 2016-12-20.
 */

import Koa = require('koa');
import path = require('path');

const viewer = require('winston-viewer');

import {Service} from "./src/service";

let app = new Koa();
app.use(Service({
    log_files: path.resolve(__dirname, './logs/*log*'),
    prefix:"http://www.baidu.com/log"
}));
app.listen(3000);
// app.use(require('koa-static')(viewer.static));