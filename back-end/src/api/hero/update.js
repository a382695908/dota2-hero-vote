/**
 *
 */

import Hero from '../../models/hero';

export default function (req, res, next) {
  Hero.update({
    _id: req.params.id
  },{

  })
}
