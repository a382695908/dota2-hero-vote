/**
 * Created by yyj on 28/12/2016.
 */

import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/';
axios.post(url+ 'hero/create',{
  "name":"撼地者",
  "enName": "Earthshaker",
  "nick":"大牛",
  "imgUrl": "images/hero/default.jpg",
  "type":0,//力量
  "vote":0
})
