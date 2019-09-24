'use strict';

exports.validate = {
  enable: false,
  package: 'egg-validate',
};


// exports.jwt = {
//   enable: false,
//   package: "egg-jwt"
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.security = {
  xframe: {
    enable: false,
  },
};