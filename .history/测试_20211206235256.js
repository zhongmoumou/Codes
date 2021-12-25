let str = 'hello,world';

/* 输出：hello
从索引号0开始，截取 01234 个索引号的字符，索引号 5不取；
相当于从索引号0开始，截取5个字符； */
console.log(str.slice(0, 5));  

/* 输出：world
从索引号6开始，截取 01234 个索引号的字符，索引号 5不取；
相当于从索引号6开始，截取5个字符； */
console.log(str.slice(6, 5)); 

// 输出：world（从索引号6开始，截取到字符最后）
console.log(str.slice(6));  
