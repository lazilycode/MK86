'use strict';

const Controller = require('egg').Controller;

class RenderController extends Controller {

  async index() {
    const { ctx,app } = this;
    const token = ctx.header.authorization  // 获取jwt
    let payload
    if (token) {
        payload = await app.jwt.verify(token.split(' ')[1], secret)  // // 解密，获取payload
        ctx.body = {
            payload
        }
    } else {
        ctx.body = {
            message: 'token 错误',
            code: -1
        }
    }
   
    // ctx.body = 'fklnerkfn'
  }
}
module.exports =RenderController