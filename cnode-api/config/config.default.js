'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler' ];

  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
  };


  config.jwt = {
    secret: "123456"
  };

  config.mysql = {
    client: {
        // host
        host: '111.231.94.121',
        // 端口号
        port: '3306',
        // 用户名
        user: 'demo',
        // 密码
        password: 'G4bTt6GChK6Cse83',
        // 数据库名
        database: 'demo'
    },
    // 所有数据库配置的默认值
    default: {
  
    },
  
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  return config;
};
 