let str = 'hello,world';

console.log(str.substr(0, 5));  // 输出：world（从索引号5开始，截取 01234 个索引号的字符，索引号 5不取）
console.log(str.substr(6, 5));  // 输出：world（从索引号6开始，截取 01234 个索引号的字符，索引号 5不取）
console.log(str.substr(6));  // 输出：world（从索引号6开始，截取到字符最后）
