'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.roles.save(userId);
    ctx.body = user;
  }

  // 查询有没有该账户
  async read() {
   const {ctx,app}=this
   console.log(ctx.params,'0000')
    const user = await ctx.service.login.find({user_name:name,password:password});
    ctx.body = user;
}
}
module.exports =LoginController