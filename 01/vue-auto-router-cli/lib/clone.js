exports.clone = async function clone(desc) {
    const { promisify } = require('util');
    const download = promisify(require('download-git-repo'));
    const ora = require('ora');
    const process = ora('下载项目中...');
    process.start();
    try {
        await download('github:su37josephxia/vue-template', desc);
        process.succeed();
    }
    catch (err) {
        process.fail();
    }
}
// exports.clone = clone;
