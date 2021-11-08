'use strict';

const compose = require('koa-compose');

/**
 * 其中一个中间件通过即可，如果全部不通过则报错
 */
function or(...middleware) {
  return function (ctx, next) {
    return dispatch(0);
    async function dispatch (i) {
      try {
        await middleware[i](ctx, next);
        return;
      } catch (err) {
        if (i + 1 < middleware.length) {
          await dispatch(i + 1);
          return;
        }
        throw new Error('All middleware fail');
      }
    }
  };
}

function and(...middleware) {
  return compose(middleware);
}

module.exports = {
  or,
  and,
};
