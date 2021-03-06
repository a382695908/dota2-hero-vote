/**
 *
 */

import jwt from 'jsonwebtoken';
import utils from '../../utils';
import config from '../../config';

export default function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

  //todo log  http-action url JONS.stringify(req.body) req.ip req.auth.username
  console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);

  async function processJwt(err, decoded) {
    let auth = await utils.redis.get(req.headers.authorization);
    if (!auth) {
      return res
        .status(401)
        .send({
          success: false,
          msg: `token无效或过期:${req.headers.authorization}`,
        });
    }
    else if (err) {
      return res
        .status(401)
        .send({
          success: false,
          msg: `无效的token:${err.message}`,
        });
      /*
       err = {
       name: 'TokenExpiredError',
       message: 'jwt expired',
       expiredAt: 1408621000
       }
       */
    }
    res.locals.user = JSON.parse(auth); //todo use xxx.locals.xxx
    req.auth = JSON.parse(auth);
    next();
  }

  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, config.secret, processJwt);
  }
  else {
    return res.status(403).send('forbidden!');
  }
}


