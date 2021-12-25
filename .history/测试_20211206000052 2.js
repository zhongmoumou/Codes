let str = 'abcoefoxyozzopp';

let oneO = str.indexOf('o');

while(oneO != -1) {
    
    console.log(oneO);
    
    oneO = str.indexOf('o', oneO +1);
}