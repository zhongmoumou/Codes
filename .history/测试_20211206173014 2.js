/* 
要求：
查找字符串 'abcoefoxyozzopp' 中出现最多的字符，并统计其次数；

核心算法：
利用 charAt(index) 遍历字符串 'abcoefoxyozzopp’ ；
把遍历出来的每个字符串赋值给一个对象（strs）；
把每个字符都存储给对象，如果对象没有该属性，就为 1，如果存在了就 +1；
遍历对象，得到最大值和该字符； */

let str = 'abcoefoxyozzopp';

// 创建一个空的对象
let obj = {};  

// 通过 for 循环，把 str 中的字符遍历出来，赋值给 strs
for (let i = 0; i < str.length; i++) {
    let strs = str.charAt(i);  

    // 通过 obj[strs] 把遍历出来的字符座位属性添加到对象 obj 中
    if (obj[strs]) {  
        obj[strs]++;   // 如果添加的属性 obj 对象已经有了，则给它的值 +1
    } else {
        obj[strs] = 1;  // 如果添加的属性 obj 对象中没有，则给它赋值为 1
    }
}

// console.log(obj);

// 需要求对象 obj 中最大值，首先需要设置一个初始的用来比较的值，这里观察对象的值可以设置为 0
let max = 0;  

// 需要找到对象 obj 中拥有最大值的属性，需要设置一个初始的空字符串
let maxChar = '';  

// 用 for 循环把对象 obj 的属性和值遍历出来
for (key in obj) {
	// key 表示遍历出的对象 obj 的属性，obj[key] 表示属性值
	// 当 obj[key] 比 max 大的时候
	if (obj[key] > max) {  
		// 把属性 key 赋值给 maxChar，并且把这个大的值 obj[key] 赋值给 max，这样可以得到这个对象中值最大的属性和属性值
		maxChar = key;
		max = obj[key];
	}
}

console.log('出现最多的字符是：' + "'" + maxChar + "'");  // 输出：出现最多的字符是：'o'
console.log('出现最多的字符的次数是：' + max);  // 输出：出现最多的字符的次数是：4
