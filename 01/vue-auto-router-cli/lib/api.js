const { clone } = require('./clone.js');
const fs = require('fs');
const handlebars = require('handlebars');
const symbols = require('log-symbols');
const chalk = require('chalk');
module.exports.init = async name => {
    console.log('~~~创建项目： ' + name);
    clone(name);
};

module.exports.refresh = async () => {
    const dir = fs.readdirSync('./src/views');
    console.log('dir', dir)
    const list = dir.filter(item => item !== 'Home.vue')
        .map(item => ({
            name: item.replace('.vue', '').toLowerCase(),
            file: item
        }));
    console.log('list', list)
    //生成router定义
    compile({ list }, './src/router.js', './template/router.js.hbs');
    //生成目录
    compile({ list }, './src/App.vue', './template/App.vue.hbs');
}

function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
        const content = fs.readFileSync(templatePath).toString();
        const result = handlebars.compile(content)(meta);
        fs.writeFileSync(filePath, result);
        console.log(symbols.success, chalk.green(`${filePath} 创建成功`));
    }
}