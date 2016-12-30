/**
 *
 */

import Hero from '../../models/hero';

function findHeroById(id) {
  return Hero.findOne({
    _id: id,
  });
}

function findHeroByName(name) {
  return Hero.find({
    $or: [
      {
        name: new RegExp(name, 'i'),
      },
      {
        nick: new RegExp(name, 'i'),
      },
      {
        enName: new RegExp(name, 'i'),
      }
    ]
  });
}

// 0Strength 1Agility 2Intelligence
function findHeroByType(heroType) {
  return Hero.find({
    type: heroType,
  });
}

// 动态添加条件
function findHeroAny(data) {
  let queryCondition = {};
  if(data._id){
    return findHeroById(data._id);
  }
  else{
    if(data.name){
      queryCondition.$or = [
        {
          name: new RegExp(data.name, 'i'),
        },
        {
          nick: new RegExp(data.name, 'i'),
        },
        {
          enName: new RegExp(data.name, 'i'),
        }
      ]
    }
    else if(data.nick){
      queryCondition.nick = new RegExp(data.nick, 'i');
    }
    else if(data.enName){
      queryCondition.enName = new RegExp(data.name, 'i');
    }
    if(data.type){
      queryCondition.type = data.type;
    }

    return Hero.find(queryCondition);
  }
}

export default function (req, res, next){

  findHeroAny(req.query)
    .then(data => res.json(data))
    .catch(err => next(err));
}

