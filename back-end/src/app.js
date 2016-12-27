/**
 * server
 */

import express from 'express';
// import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import busboy from 'connect-busboy'
import bytes from 'bytes';
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
app.use(busboy({
  limits: {
    fileSize: bytes(config.upload.file_limit)
  }
}));

mongoose.connect(config.database);
mongoose.Promise = Promise;

app.use('/api', API); // /v1

/**
 * catch 404 and forward to error handler
 * 到达后面的都是未处理的路由 和 500 ？
 */
app.use((err, req, res, next) => {
  res
    .status(500)
    .send(`server error:${err.message}`);
});

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log(`Express server listening on port ${app.get('port')}`);
  }
});
