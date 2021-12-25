let str = 'abcoefoxyozzopp';

let oneO = str.indexOf('o');

while(oneO != -1) {
    
    console.log('o 的位置是：' + oneO);

    oneO = str.indexOf('o', oneO +1);
}