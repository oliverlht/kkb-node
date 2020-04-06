const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    const {url} = ctx;
    const start = new Date().getTime();
    console.log('start',start);
    await next();
    const end = new Date().getTime();
    console.log(`${url} 耗时 ${end - start}`);
});

app.use((ctx, next) => {
    console.log('======')
    ctx.body = { name: '123' }
});
app.listen(3000);