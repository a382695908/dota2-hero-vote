/**
 *
 */

import validator from 'validator';
import User from '../../models/user';
import utils from '../../utils';

export function getUserByUsername(username) {

  return User.findOne({
    username: username,
  });
}

export function getUserByUserId(id) {
  if(!validator.isMongoId(id)){
    return null;
  }
  return User.findOne({
    _id: id,
  });
}

export default async function (req, res, next) {

  const user = await getUserByUserId(req.auth._id);
  let json = {};
  if(user){
    Object.assign(json, user._doc);
    delete json.__v;
    delete json.password;
  }

  res.json({
    success: true,
    msg: '成功',
    data: json
  })
}
