/**
 * Created by yyj on 26/12/2016.
 */

import mongoose, { Schema } from 'mongoose'

export default mongoose.model('Hero', new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  enName:{
    type: String,
    required: true
  },
  nick: String,
  type: {
    type: Number,
    required: true
  },
  vote: {
    type: Number,
    required: true
  },
}))
