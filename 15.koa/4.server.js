let Koa = require('./koa/application');
let app = new Koa();
let logger = function () {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('loggger');
        resolve();
    }, 1000);
  })
}
// koa可以解决异步问题
app.use(async (ctx,next)=>{
    ctx.body = 1000;
    return next(); // 如果next后面没有逻辑可以直接用return 即可
});
app.use(async(ctx, next) => {
    await logger();
    ctx.body = 2000;
    next();
});
app.listen(3000, 'localhost', () => {
  console.log(`server start 3000`);
})