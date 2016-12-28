/**
 *
 */

import User from '../../models/user';
import utils from '../../utils';

export default async function (req, res, next) {

  let canCreate;
  const user = await
  User.findOne({
    username: req.body.username,
  });
  canCreate = user == null;

  if (canCreate === false) {
    res.json({
      success: false,
      msg: '已经存在该用户'
    });
    return;
  }

  const pwd = utils.md5(req.body.password);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: pwd,
    enable: 2,
    createTime: new Date(),
  });

  const result = newUser.save();
  result
    .then(data => {
      //todo 调用登录接口
      res.json({
        success: true,
      })
    })
    .catch(function (err) {
      next(err);
    });
}
