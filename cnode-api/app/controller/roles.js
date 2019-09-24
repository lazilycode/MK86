'use strict';

const Controller = require('egg').Controller;

class RolesController extends Controller {

  async index() {
    const ctx = this.ctx;
    // const userId = ctx.params;
    // const user = await ctx.service.roles.save(userId);
    ctx.body = 'kkk';
  }
}
module.exports =RolesController