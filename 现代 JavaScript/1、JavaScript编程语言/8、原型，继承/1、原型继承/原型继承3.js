/* 
任务三：写在哪里？
重要程度: 5
我们有从 animal 中继承的 rabbit。

如果我们调用 rabbit.eat()，哪一个对象会接收到 full 属性：animal 还是 rabbit？

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); 
*/

let animal = {
    eat() {
      this.full = true;
    }
};
  
let rabbit = {
    __proto__: animal
};
  
rabbit.eat(); 

/* 
答案：rabbit。

这是因为 this 是点符号前面的这个对象，因此 rabbit.eat() 修改了 rabbit。

属性查找和执行是两回事儿。

首先在原型中找到 rabbit.eat 方法，然后在 this=rabbit 的情况下执行。 
*/