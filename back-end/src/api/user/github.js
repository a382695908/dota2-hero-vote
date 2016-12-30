/**
 * Created by yyj on 30/12/2016.
 * github 登录
 */

import User from '../../models/user';

export default function (accessToken, refreshToken, profile, done) {
  console.log(profile);

  User.findOrCreate({
    githubId: profile.id,
  }, function (err, user) {
    return done(err, user);
  });
}
