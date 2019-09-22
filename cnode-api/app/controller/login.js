'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async index() {
    const { ctx,app } = this;
    const token = app.jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30  }, app.config.jwt.secret);
    ctx.body = token
  }
}
module.exports =LoginController