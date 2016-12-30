/**
 *
 */

import Hero from '../../models/hero';

export default async function (req, res, next) {
  // 投票
  if (req.body.vote) {
    // 已经投过票了？取消投
    const hasVoted =await Hero.findOne({
      _id: req.params.id,
      likes: {
        $elemMatch: { $eq: req.auth._id }
      }
    });
    let action = hasVoted ? "$pull" : "$push";

    Hero.update({
        _id: req.params.id,
        // likes: { "$ne": req.auth._id }
    },{
      $inc: { "likeCount": req.body.vote > 0 ? 1 : -1},// 小漏洞，无限+ -，除非分别记录 up down?
      [action]: { "likes": req.auth._id }
    })
      .then(() => {
        res.json({
          success: true,
          msg: '更新成功'
        });
      })
      .catch(err => {
        next(err);
      })

  }
  else { // 普通更新
    Hero.update({
      _id: req.params.id
    }, req.body)
      .then(() => {
        res.json({
          success: true,
          msg: '更新成功'
        })
      })
  }
}
