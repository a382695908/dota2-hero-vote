/**
 *
 */

import jwt from 'jsonwebtoken';
import config from '../../config';

export default function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  console.log(req.ip, req.ips);

  if (req.headers.token) {

    jwt.verify(req.headers.token, config.secret, (err, decoded) => {
      console.log(decoded);

      if (err) {
        /*
         err = {
         name: 'TokenExpiredError',
         message: 'jwt expired',
         expiredAt: 1408621000
         }
         */
      }
    });
  }
  next();
}
