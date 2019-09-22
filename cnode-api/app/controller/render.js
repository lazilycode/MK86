'use strict';

const Controller = require('egg').Controller;

class RenderController extends Controller {

  async index() {
    const { ctx } = this;

   
    ctx.body = 'fklnerkfn'
  }
}
module.exports =RenderController