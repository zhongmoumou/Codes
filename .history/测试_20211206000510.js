let str = 'abcoefoxyozzopp';

let oneO = str.indexOf('o');

let num = 0;

while(oneO != -1) {
    
    console.log('"o" 的位置分别是：' + oneO + '（索引号）');

    num++;

    oneO = str.indexOf('o', oneO +1);
}

console.log('"o" 出现的次数是：' + num + ' 次');