/* 
调用方式的差异
重要程度: 5
让我们创建一个新的 rabbit 对象：

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
以下调用做的是相同的事儿还是不同的？

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi(); 
*/


function Rabbit(name) {
    this.name = name;
  }
Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
let rabbit = new Rabbit("Rabbit");


// 以下调用做的是相同的事儿还是不同的？
rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();  // undefined

/* 
第一个调用中 this == rabbit，其他的 this 等同于 Rabbit.prototype，因为 this 就是点符号前面的对象。
所以，只有第一个调用显示 Rabbit，其他的都显示的是 undefined：
*/