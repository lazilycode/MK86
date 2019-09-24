'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    const ctx = this.ctx;
    const query = ctx.request.body;
    console.log(query, '9900')
    // const user = await ctx.service.roles.save(userId);
    ctx.body = query;
  }

  // 查询有没有该账户
  async read() {
    const { ctx, app } = this
    const query = ctx.request.body;
    const user = await ctx.service.login.find({ user_name: query.name, user_password: query.password });
   
    //token
    const token = app.jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30  }, app.config.jwt.secret);
   

    let obj={}
    if(user.length){  
      obj.code='0x00000',
      obj.message='返回成功',
      obj.data=user[0]
      obj.data.token=token
      ctx.body=obj
    }else{
      obj.message='返回失败',
      obj.code='0x00001'
      ctx.body=obj
    }
  }
}
module.exports = LoginController