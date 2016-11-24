/**
 * Created by yyj on 11/24/16.
 */

const proxy = {
  '/api':{
    target: 'https://api.github.com',
    secure: true,
    headers: {
      'Host': 'api.github.com',
      'Cookie': '' // send cookie on demand
    },
    pathRewrite: function (path) {
      return path.replace(/^\/api/, ''); // remove '/node-0' prefix when requesting
    }
  }
};

export default  proxy;
