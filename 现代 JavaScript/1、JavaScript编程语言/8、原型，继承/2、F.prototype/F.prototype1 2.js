/* 
任务一：修改 "prototype"
重要程度: 5
在下面的代码中，我们创建了 new Rabbit，然后尝试修改它的 prototype。
*/

// 最初，我们有以下代码：
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true


// 我们增加了一个字符串（强调）。现在 alert 会显示什么？
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // 显示：true，因为Rabbit.prototype 的赋值操作为新对象设置了 [[Prototype]]，但它不影响已有的对象。


// ……如果代码是这样的（修改了一行）？
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // 显示：false，因为对象通过引用被赋值。来自 Rabbit.prototype 的对象并没有被复制，它仍然是被 Rabbit.prototype 和 rabbit 的 [[Prototype]] 引用的单个对象。所以当我们通过一个引用更改其内容时，它对其他引用也是可见的。


// 像这样呢（修改了一行）？
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // 显示：true，因为所有 delete 操作都直接应用于对象。这里的 delete rabbit.eats 试图从 rabbit 中删除 eats 属性，但 rabbit 对象并没有 eats 属性。所以这个操作不会有任何影响。


// 最后一种变体：
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // 显示：underfined，因为属性 eats 被从 prototype 中删除，prototype 中就没有这个属性了。