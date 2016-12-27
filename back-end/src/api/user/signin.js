/**
 *
 */

import jwt from 'jsonwebtoken';
import User from '../../models/user';
import config from '../../config';
import utils from '../../utils';

export default async function (req, res, next) {

  const user = await User
    .findOne({
      username: req.body.username,
      password: utils.md5(req.body.password),
    });

  if (user) {
    const token = jwt.sign(
      { username: user.username },
      config.secret,
      {
        expiresIn: '1d',
      },
    );
    await utils.redis.set(token, {
      username: user.username,
      // 权限
    }, 60 * 60 * 3)// 3h

    res.json({
      success: true,
      token,
    });
  }
  else {
    res.json({
      success: false,
      message: '用户名密码错误.',
    });
  }
}
