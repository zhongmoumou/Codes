/* 
创建一个可扩展的 calculator。

创建一个构造函数 Calculator，以创建“可扩展”的 calculator 对象。

该任务由两部分组成。

首先，实现 calculate(str) 方法，该方法接受像 "1 + 2" 这样格式为“数字 运算符 数字”（以空格分隔）的字符串，并返回结果。该方法需要能够理解加号 + 和减号 -。

用法示例：

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
然后添加方法 addMethod(name, func)，该方法教 calculator 进行新操作。它需要运算符 name 和实现它的双参数函数 func(a,b)。

例如，我们添加乘法 *，除法 / 和求幂 **：

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
此任务中没有括号或复杂的表达式。
数字和运算符之间只有一个空格。
你可以自行选择是否添加错误处理功能。
*/

// 官方答案，暂时不太理解

function Calculator() {

    this.methods = { // 创建一个方法，设定+ - * /运算符号的使用规则
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        o = split[1],
        b = +split[2];
  
      if (!this.methods[o] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[o](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let calc = new Calculator(); // 调用构造函数 Calculator 并赋值给 calc

alert( calc.calculate("3 + 7") ); // 输出结果为：10