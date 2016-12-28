/**
 *
 */
import Express from 'express'

// 公共api
import signup from './user/signup'
import signin from './user/signin'
import heroQuery from './hero/query'

// 验证身份
import auth from './user/auth'

// 下面的需要auth
import userQuery from './user/query'
import userUpdate from './user/update';

import heroCreate from './hero/create'
import heroUpdate from './hero/update'
import heroDelete from './hero/delete'

let api = Express.Router();

api.post('/user/signin', signin);
api.post('/user/signup', signup);
api.get('/hero', heroQuery);

// 下面的路由需要登录
api.use(auth);

api.get('/user', userQuery);
api.put('/user/:id', userUpdate);

api.post('/hero', heroCreate);
api.put('/hero/:id', heroUpdate);
api.delete('/hero/:id', heroDelete);

//
export default api;
