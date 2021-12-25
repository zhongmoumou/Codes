/* 
映射到 names。

你有一个 user 对象数组，每个对象都有 user.name。编写将其转换为 names 数组的代码。
*/

let a = { name: "John", age: 25 };
let b = { name: "Pete", age: 30 };
let c = { name: "Mary", age: 28 };

let users = [ a, b, c ];
/* 
上面一行代码相当于等于：
let users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
];
*/

let names = users.map(item => item.name);
/* 上面一行代码全写为：
let names = users.map( function(item){
    return item.name;
} ); */

let ages = users.map(item => item.age);

alert( names ); // 输出：John, Pete, Mary
alert( ages ); // 输出：25, 30, 28