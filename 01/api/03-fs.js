const fs = require('fs');

//同步调用
// const data = fs.readFileSync('./clone.js');
// console.log('data:', data, data.toString());

//异步调用
fs.readFile('./clone.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('data', data, data.toString());
    }
});