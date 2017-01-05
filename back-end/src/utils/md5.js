/**
 * Created by yyj on 27/12/2016.
 */

import crypto from 'crypto';

export default function (val, type = 'base64') {

  return crypto
    .createHash('md5')
    .update(val, 'utf-8')
    .digest(type);
}
