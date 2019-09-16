'use strict';

const Controller = require('egg').Controller;

class DemoController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.service.demo.show()
  }


}

module.exports = DemoController;
