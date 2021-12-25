let str = 'hello,world';

/* 输出：hello
从索引号0开始，截取到索引号4的字符，索引号5不取；；
相当于从索引号0开始，截取5个字符； */
console.log(str.slice(-4, 5));  

/* 输出：worl
从索引号7开始，截取到索引号10的字符，索引号10不取；*/
console.log(str.slice(6, 10)); 

// 输出：world（从索引号6开始，截取到字符最后）
console.log(str.slice(6));  
