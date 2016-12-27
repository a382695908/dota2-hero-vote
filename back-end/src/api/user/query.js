/**
 *
 */

import User from '../../models/user';
import utils from '../../utils';

export function getUserByUsername(username) {

  User.findOne({
    username: req.body.username,
  })
    .then((err, user) => {
      return user;
    })
    .catch(err => {

    })
}

export default function (req, res, next) {

  res.json({
    success: true,
    msg: '成功'
  })
}
