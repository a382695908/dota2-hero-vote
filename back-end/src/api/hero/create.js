/**
 * add new hero
 * http://dota2.gamepedia.com/Heroes
 */


import Hero from '../../models/hero';

export default function (req, res, next) {

  new Hero({
    name: req.body.name,
    enName: req.body.enName,
    nick: req.body.nick,
    imgUrl: req.body.imgUrl || 'images/hero/default.jpg',
    type: req.body.type,
    vote: req.body.vote || 0,
  })
    .save()
    .then(data => {
      res.json({
        success: true,
      });
    })
    .catch(function (err) {
      next(err);
    });

}
