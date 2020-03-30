// const os = require('os');
// const freeMem = os.freemem();
// console.log(`已用内存${freeMem}`);
// const totalMem = os.totalmem();
// console.log(`总内存${totalMem}`);
// const mem = freeMem/totalMem *100;
// console.log(`内存占用率${mem}%`);

async function clone(){
    const { promisify } = require('util');
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora('下载项目中...');
    process.start();
    try{
        await download('github:su37josephxia/vue-template', './test');
        process.succeed();
    }catch(err){
        process.fail();
    }
}

clone();
