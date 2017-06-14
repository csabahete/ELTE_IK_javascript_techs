const port = 12345;

const Koa = require('koa');
const app = new Koa();

const router = require('./router');

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);
console.log(`app listening on port ${port}`);