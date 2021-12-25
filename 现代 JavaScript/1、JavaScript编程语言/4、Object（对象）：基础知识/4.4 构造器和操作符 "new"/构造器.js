// 任务一：两个函数 ~ 一个对象，是否可以创建像 new A()==new B() 这样的函数 A 和 B？
// let object = {
//     name: 'zmm',
// }

// function A() {
//     return object;
// }
// function B() {
//     return object;
// }

// alert( new A() == new B() );

// 任务二：创建 new Calculator,：
/* 
创建一个构造函数 Calculator，它创建的对象中有三个方法:

read() 使用 prompt 请求两个值并把它们记录在对象的属性中。
sum() 返回这些属性的总和。
mul() 返回这些属性的乘积。 
*/
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');
//     };

//     this.sum = function() {
//         alert( 'sum=' + (this.a + this.b) );
//     };

//     this.mul = function() {
//         alert( 'mul=' + (this.a * this.b) );
//     }
// }

// let calculator = new Calculator();

// calculator.read();
// calculator.sum();
// calculator.mul();


// 任务三：创建 new Accumulator
/* 
创建一个构造函数 Accumulator(startingValue),它创建的对象应该：

将“当前 value”存储在属性 value 中。起始值被设置到构造器 startingValue 的参数。
read() 方法应该使用 prompt 来读取一个新的数字，并将其添加到 value 中。
换句话说，value 属性是所有用户输入值与初始值 startingValue 的总和。
*/
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += + +prompt('初始值是 1', '请输入一个数字进行相加?');
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
alert(accumulator.value)