/**
 * Created by yyj on 28/12/2016.
 */

import User from '../../models/user';

export default async function (req, res) {

  User.update({
    _id: req.params.id
  }, req.body)
    .then(() => {
      res.json({
        success: true,
        msg: '更新成功'
      })
    })
}
