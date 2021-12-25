let str1 = 'hello,world,nihao'
let str2 = 'hello & world & nihao'

console.log(str1.split('-'));  // 输出：['hello', 'world', '!']
console.log(str1.split('&'));  // 输出：['hello', 'world', '!']