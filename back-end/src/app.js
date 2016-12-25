/**
 * server
 */

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import qs from 'qs';
import mongoose from 'mongoose';
import config from './config';
import API from './api';

const app = express();
app.set('port', config.port);
// app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'));
app.use(cookieParser());//todo remove
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(config.database);

app.use('/api', API);

/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由
 * todo 写日志
 */
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  if (err.status = 404) {
    res
      .status(404)
      .json({
        code: 404,
        msg: '没有这个接口'
      });
  }
  else {
    res
      .status(500)
      .send(`server error,code:${err.status || 500}`);
  }
});

app.listen(app.get('port'), (err) => {
  if(err){
    console.log(err.message);
  }
  else{
    console.log(`Express server listening on port ${app.get('port')}`);
  }
})
