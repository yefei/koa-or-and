# koa or and middleware

```javascript
const Koa = require('koa');
const { or, and } = require('koa-or-and');

const app = new Koa();

function fail1(ctx, next) {
  console.log('fail1');
  throw new Error('fail1');
}

function fail2(ctx, next) {
  console.log('fail2');
  throw new Error('fail2');
}

function success1(ctx, next) {
  console.log('success1');
  return next();
}

function success2(ctx, next) {
  console.log('success2');
  return next();
}

app.use(or(fail1, fail2, and(success1, fail1), success2));

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```

output:
```
fail1
fail2
success1
fail1
success2
```
