/* 任务一：将对象转换为 JSON，然后再转换回来

将 user 转换为 JSON，然后将其转换回到另一个变量。

*/

let user = {
    name: "John Smith",
    age: 35
}; 

user = JSON.stringify(user, null, 2);
// 将对象 user 转换为 JSON

alert(user);


user = JSON.parse(user);
// 再将JSON user 转换为 对象

alert(user.age);


/* 合起来为： 
JSON.parse( JSON.stringify(user) )
*/