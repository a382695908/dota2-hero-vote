/**
 * Created by yyj on 26/12/2016.
 */

import mongoose, { Schema } from 'mongoose'
import validate from '../utils/validate'

// mongoose.Promise = Promise;

export default mongoose.model('User', new Schema({
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    validate: validate.email,
  },
  password: {
    type: String,
    required: true,
  },
  // 0:禁用; 1:有效; 2:未验证邮箱
  enable: {
    type: Number,
    required: true,
    default: 2
  },
  createTime: {
    type: Date,
    required: true,
    default: new Date()
  },
  githubId: String
}))
