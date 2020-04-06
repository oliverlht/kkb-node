const Kkb = require('./kkb')
const app = new Kkb();

app.use(async (ctx, next) => {
    ctx.body = '0'
    await next();
    ctx.body += 'A'
});

app.use(async (ctx, next) => {
    console.log('diaoyong2')
    ctx.body += '1'
    await delay();
    await next();
    ctx.body += '5'
});

app.use(async (ctx, next) => {
    console.log('diaoyong3')
    ctx.body += '2'
    await next();
    ctx.body += '4'
});

app.use(async (ctx, next) => {
    console.log('diaoyong4')
    ctx.body += '3'
});

app.listen(3000, () => {
    console.log('监听3000端口');

})

function delay (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}