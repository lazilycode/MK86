'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.roles.save(userId);
    ctx.body = user;
  }

  async find(e) {
    const user = await this.app.mysql.get('login', e);
    return { user };
  }
}
module.exports =LoginController