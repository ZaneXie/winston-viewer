# winston-viewer

A winston log viewer based on Vue.js and koa. This is the backend part, frontend part can be found at 
[winston-viewer-static](https://github.com/ZaneXie/winston-viewer-static).

## Usage

#### Install
```bash
npm install --save winston-viewer
```

#### Usage
##### Used as standalone web app
In this mode, you should install koa first (npm install koa).
```javascript
var winston_viewer = require('winston_viewer');
winston_viewer.winston_viewer({
    // listen port, default 3000
    port: 3000,                  
    // url prefix, can be null or string.
    prefix: '/log',              
    // the winston instance, can be null. 
    // You can use the winston already configured, if this is null or undefined, the log_files will be used.
    winston: require('winston'), 
    // log files, parsed by glob.
    log_files: './logs/**',
})
```
Then it can be visited as http://localhost:3000/log/ (don't forget the final '/')

##### Used as middleware for a existing koa app

```javascript

// app has initialized like  app = require('koa')();
var winston_viewer = require('winston_viewer');

app.use(winston_viewer.winston_viewer_koa_middleware(options));

// options is the same as the previous one, except no port needed.
```

Then it can be visited by http://${koa_address}:${koa_port}/${prefix}/ (don't forget the final '/')


## Build
This project is a Typescript project.

```bash
# install dependency
npm install

# install typescript definition files
typings install # if typings not found, use npm install -g typings

# do build
npm run build
```
