const fs = require('fs');

function get(key) {
    fs.readFile('./db.json', (err, data) => {
        console.log(data);
        const json = JSON.parse(data);
        console.log(json[key]);
    })
}

function set(key, value) {
    var json;
    fs.readFile('./db.json', (err, data) => {
        json = data ? JSON.parse(data) : {};
        json[key] = value;
        fs.writeFile('./db.json', JSON.stringify(json), (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('写入成功');
            }
        })
    })
}

// get('a');
// set('c', 'c3');

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.on('line',(input)=>{
    const [op,key,value] = input.split(' ');
    console.log(op,key,value);
    if(op === 'get'){
        get(key);
    }else if(op === 'set'){
        set(key,value);
    }else if(op === 'quit'){
        rl.close();
    }else {
        console.log('没有操作');
    }
})