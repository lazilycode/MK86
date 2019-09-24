'use strict';

module.exports = app => {
  // app.router.resources('topics', '/api/v2/topics', 'topics');
  app.post("/token", "token.index");
  app.get("/", "render.index");
  app.post("/roles", "roles.index");

  //用户登陆查询
  app.post("/login", "login.read");
};
