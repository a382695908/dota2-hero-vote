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
  admins: { yyjazsf: true },

  upload: {
    file_limit: '100M',
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },
};

if (process.env.NODE_ENV === 'test') {
  config.database = 'mongodb://127.0.0.1/dota2';
}

export default config;
