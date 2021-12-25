// 任务一：后置运算符和前置运算符，a、b、c、d 的最终值分别是多少？
let a = 1, b = 1;
let c = ++a; 
let d = b++; 

alert(a); // 输出 2
alert(b); // 输出 2
alert(c); // 输出 2
alert(d); // 输出 1

// 任务二：赋值结果，代码中的 a 和 x 的值是多少？
let e = 2;
let f = 1 + (e *= 2);

alert(e); // 输出 4
alert(f); // 输出 5

// 任务三：类型转换，下面这些表达式的结果是什么？
"" + 1 + 0 // 结果等于 "10"(有字符串的加法 "" + 1，首先会将数字 1 转换为一个字符串："" + 1 = "1"，然后我们得到 "1" + 0，再次应用同样的规则得到最终的结果。)
"" - 1 + 0 // 结果等于 -1(减法 - 只能用于数字，它会使空字符串 "" 转换为 0)
true + false // 结果等于 1(true转换为数字 1，false转换为数字 0)
6 / "3" // 结果等于 2(除法 / 只能用于数字，它会使字符串 "3" 转换为 3)
"2" * "3" // 结果等于 6(乘法 * 只能用于数字，它会是字符串 "2" 和 "3" 转换为数字 2 和 3)
4 + 5 + "px" // 结果等于 "9px"(先计算数字 4 + 5，再计算 + 字符串 "px")
"$" + 4 + 5 // 结果等于 "$45"(先计算字符串 "$" + 字符串 "4",再计算+ 字符串 "5")
"4" - 2 // 结果等于 2(减法 - 只能用于数字)
"4px" - 2 // 结果等于 NaN(减法 - 只能用于数字，4px不是数字，变成了NaN)
7 / 0 // 结果等于 Infinity(数学中非0数字除以0等于0，但是JavaScript中非0数字除以0等于无穷大，Infinity)
"  -9  " + 5 // 结果等于 " -9 5"(带字符串的加法会将数字 5 加到字符串之后)
"  -9  " - 5 // 结果等于 -14(减法始终将字符串转换为数字，因此它会使 " -9 " 转换为数字 -9（忽略了字符串首尾的空格）)
null + 1 // 结果等于 1(null 经过数字转换之后会变为 0)
undefined + 1 // 结果等于 NaN(undefined 经过数字转换之后会变为 NaN)
" \t \n" - 2 // 结果等于 -2(字符串转换为数字时，会忽略字符串的首尾处的空格字符。在这里，整个字符串由空格字符组成，包括 \t、\n 以及它们之间的“常规”空格。因此，类似于空字符串，所以会变为 0)

// 任务四：修正加法，要求用户输入两个数字并显示它们的总和为3.
let g = prompt("First number?", 1);
let h = prompt("Second number?", 2);

alert(g + h); // 运行结果不正确，输出是 12（对于默认的 prompt 的值）
alert(Number(g) + Number(h)); // Number()可以转换为数字
// 或者 alert(+a + +b),一元运算符加号可以把非数字转换为数字
