/**
 * Created by xiezongjun on 2016-12-20.
 */

import path = require('path');
import {Service, IOption} from "./src/service";

export const winston_viewer_koa_middleware = Service;

interface IAppOption extends IOption {
    port?: number;
}

export const winston_viewer = (option: IAppOption) => {
    let Koa;
    try {
        Koa = require('koa');
    } catch (err) {
        throw new Error("You should install koa first. (npm install koa)")
    }
    let app = new Koa();
    app.use(Service(option));
    app.listen(option.port || 3000);
}
