/**
 *
 */

import Hero from '../../models/hero';

export default function (req, res, next) {

  Hero.remove({
    _id: req.params.id
  })
    .then(data => {
      res.json({
        success: true,
        msg: `删除成功`,
      })
    })
    .catch(err => next(err));

}
