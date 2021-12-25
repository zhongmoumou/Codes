/* 
任务二：任意数量的括号求和
重要程度: 2
写一个函数 sum，它有这样的功能：

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. 提示：你可能需要创建自定义对象来为你的函数提供基本类型转换。 
*/

function sum(a) {
    let num = a;

    function sumS(b) {
        num += b;
        return sumS;
    }

    sumS.toString = function() {
        return num;
    };
    

    return sumS;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15

/* 
为了使整个程序无论如何都能正常工作，sum 的结果必须是函数。
这个函数必须将两次调用之间的当前值保存在内存中。
根据这个题目，当函数被用于 == 比较时必须转换成数字。函数是对象，所以转换规则会按照 对象 — 原始值转换 章节所讲的进行，我们可以提供自己的方法来返回数字。 
*/