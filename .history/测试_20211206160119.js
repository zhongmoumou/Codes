/* 
要求：
查找字符串 'abcoefoxyozzopp' 中出现最多的字符，并统计其次数；

核心算法：
利用 charAt(index) 遍历字符串 'abcoefoxyozzopp’ ；
把遍历出来的每个字符串赋值给一个对象（strs）；
把每个字符都存储给对象，如果对象没有该属性，就为 1，如果存在了就 +1；
遍历对象，得到最大值和该字符； */

let str = 'abcoefoxyozzopp';  

let obj = {};

for (let i = 0; i < str.length; i++) {
    let strs = str.charAt(i);

    if (obj[strs]) {
        obj[strs]++; 
    } else {
        obj[strs] = 1;
    }
}

console.log(obj);

for (key in obj) {
	alert(key);  // 输入的是变量 key，则得到对象 obj 的属性/方法
	
	alert(obj[key]);  // 输入的是对象[变量]，得到的是对象 obj 的属性/方法值
}
