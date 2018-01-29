'use stract';
console.log('loding...');
const app = require('superagent');
var errNum = 0;
var resNum = 0;

// 设置每秒访问次数
var setNum = 100;

var url = 'https://xxx';

function run() {
    app.get(url)
        .end((err, res) => {
            if (err) {
                errNum++;
            };
            if (res) {
                resNum++;
            };
            console.log('err: %s', errNum);
            console.log('res: %s', resNum);
        });
};

// 1s内发起 (n)次请求
function mode1(num) {
    setInterval(() => {
        for (let i = 0; i < num; i++) {
            run();
        };
    }, 1000);
};

mode1(setNum);
