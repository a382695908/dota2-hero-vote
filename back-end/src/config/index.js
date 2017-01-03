/**
 *
 */
import path from 'path';
let config = {

  debug: true,

  port: 3000,

  secret: 'test_secret',

  //mongodb
  database: 'mongodb://127.0.0.1/dota2',

  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0,
    password: '',
  },

  // auto create users when /init
  admins: [
    'yyjazsf',
  ],

  upload: {
    file_limit: '100M',
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '444e32d4b0046821de79',
    clientSecret: '7215422a1f287be1b613018e4d6aae181de3de7f',
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
  },
};

if (process.env.NODE_ENV === 'test') {
  config.database = 'mongodb://127.0.0.1/dota2';
}

export default config;
