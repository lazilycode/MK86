'use strict';

module.exports = app => {
  app.router.resources('topics', '/api/v2/topics', 'topics');
  app.get("/token", "token.index");
  app.get("/", app.jwt, "render.index");
};
