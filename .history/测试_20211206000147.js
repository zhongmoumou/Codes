let str = 'abcoefoxyozzopp';

let oneO = str.indexOf('o');

while(oneO != -1) {
    
    console.log('o 的位置分别是：' + oneO + '（字符串）');

    oneO = str.indexOf('o', oneO +1);
}