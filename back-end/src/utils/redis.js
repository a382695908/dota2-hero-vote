/**
 * Created by yyj on 27/12/2016.
 */
import config from '../config';
import Redis from 'ioredis';

const client = new Redis(config.redis);

client.on('error', err => {
  console.log(err.message);
  process.exit(1);
});

function get(key) {
  return client.get(key);
}

function set(key, value, time) {

  return new Promise((resolve, reject) => {
    value = JSON.stringify(value);

    if (!time) {
      client.set(key, value, (err) => {
        if(err){
          reject(err);
        }
        else{
          resolve();
        }
      });
    } else {
      client.setex(key, time, value, (err) => {
        if(err){
          reject(err);
        }
        else{
          resolve();
        }
      });
    }
  });
}

export default {
  get,
  set,
};
