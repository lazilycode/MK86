'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/demo', controller.demo.show);
  router.get('/user', controller.user.login);
};
