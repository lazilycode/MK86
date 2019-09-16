'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }



  async show(params) {
    return 'bdhbcdshbchdsjbcudwilbcwiubew'
  }

  
}

module.exports = DemoService;
