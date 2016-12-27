/**
 * Created by yyj on 26/12/2016.
 */

export default {
  email: {
    validator: (val)=>{
      return /^[a-z0-9][a-z0-9._-]*@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(val);
    },
    message: '{VALUE} 不是正确的邮箱。'
  }
};
