'use strict';

const Service = require('egg').Service;

class UseController extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }


  async login(loginMsg) {
    const { ctx } = this;
    const res = {};
    // 在当前数据库中验证此用户思否存在
    const queryResult = await ctx.model.User.findOne({
      userName: loginMsg.userName,
    });
    if (!queryResult) {
      res.code = -2;
      res.msg = '用户不存在，请前去注册';
      res.data = {};
      res.status = 'failed';
    } else {
      const result = await ctx.model.User.findOne(loginMsg);
      if (!result) {
        res.code = -1;
        res.msg = '用户信息不正确';
        res.data = {};
        res.status = 'failed';
      } else {
      // 签发token
        const token = JWT.sign({
          userName: result.userName,
        },
        this.config.jwt.secret, {
          expiresIn: 60 * 60,
        });
        res.data = result;
        res.code = 1;
        res.token = token;
        res.status = 'ok';
      }
    }
    return res;
  }

  
}

module.exports = UseController;
