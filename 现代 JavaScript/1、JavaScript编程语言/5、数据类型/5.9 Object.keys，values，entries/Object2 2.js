/* 
任务二：计算属性数量

写一个函数 count(obj)，该函数返回对象中的属性的数量：

P.S. 试着使代码尽可能简短。忽略 Symbol 类型属性，只计算“常规”属性。
*/

let user = {
    name: 'John',
    age: 30
  };

function count(user) {
    return Object.keys(user).length;
}

alert( count(user) ); // 2