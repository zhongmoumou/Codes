let str = 'hello,world';

/* 输出：hello
从索引号0开始，截取到索引号4的字符，索引号5不取； */
console.log(str.substring(0, 5));  

/* 输出：worl
从索引号7开始，截取到索引号10的字符，索引号10不取；*/
console.log(str.substring(6, 10)); 

// 输出：world（从索引号6开始，截取到字符最后）
console.log(str.substring(6));