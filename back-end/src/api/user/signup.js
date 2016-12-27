/**
 *
 */

import User from '../../models/user';
import utils from '../../utils';


export default function (req, res, next) {

  // let canCreate;
  // User.findOne({
  //   username: req.body.username,
  // })
  //   .then((err,user) => {
  //     canCreate = user == null;
  //     if(canCreate === false){
  //       res.json({
  //         success: false,
  //         msg: '已经存在该用户'
  //       });
  //     }
      //todo await
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
        .catch(function(err){
          next(err);
        });
    // })
    // .catch((err) => {
    //   res.json({
    //     success: false,
    //     msg: `${err.message}`
    //   });
    // });
}
