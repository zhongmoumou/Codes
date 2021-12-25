/* 
任务一：使用原型
重要程度: 5
下面这段代码创建了一对对象，然后对它们进行修改。

过程中会显示哪些值？

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
应该有 3 个答案。 
*/

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
  
alert( rabbit.jumps ); // 显示：true，优先显示 rabbit 中的 jumps 属性值

delete rabbit.jumps;
  
alert( rabbit.jumps ); // 显示：null，rabbit 中的 jumps 被删除，则向上原型 animal 中寻找 jumps 属性值
  
delete animal.jumps;
  
// alert( rabbit.jumps ); // 不显示或 underfined，因为 rabbit 和 animal 中的 jumps 属性都被删除了