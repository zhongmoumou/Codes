// 任务一：最后一次循环的值，此代码最后一次 alert 值是多少？为什么？
let i = 3;

while (i) {
    alert(i--);
}
// 最后一次 alert 的值是1，因为每次循环迭代都将 i 减 1。当检查到 i = 0 时，while(i) 循环停止。

// 任务二："while" 循环显示哪些值？以下两个循环的 alert 值是否相同？
let a = 0;
while (++a < 5) alert(a);

let b = 0;
while (b++ < 5) alert(b);
// 两个循环的 alert 值不一样，上面是1，2，3，4；下面是1，2，3，4，5

// 任务三："for" 循环显示哪些值？以下两次循环的 alert 值是否相同？
for (let c = 0; c < 5; c++) alert(c);
for (let d = 0; d < 5; ++d) alert(d);
// 两个循环的值一样，上面是0，1，2，3，4；下面是0，1，2，3，4

// 任务四：使用 for 循环输出偶数，使用 for 循环输出从 2 到 10 的偶数。
// 方法一：
for (let even1 = 2; even1 <=10; even1++) {
    if (even1 % 2 == 0) {
        alert(even1); 
    }
}

// 方法二：
for (let even2 = 2; even2 <=10; even2++) {
    if (even2 % 2 > 0)continue 
    {
        alert(even2);
    }
}

// 方法三：
for (let even3 = 2;even3 <= 10;even3 = even3 + 2) {
    alert(even3);
}

// 任务五：用 "while" 替换 "for"，重写代码，在保证不改变其行为的情况下，将 for 循环更改为 while（输出应保持不变）。
for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
/* 重写：
let i = 0;
while (i <3) {
    alert(`number ${i}!`)
    i++;
} 
*/

// 任务六：重复输入，直到正确为止
/* 
编写一个提示用户输入大于 100 的数字的循环。如果用户输入其他数值 —— 请他重新输入。
循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止。
在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理。
*/
// 方法一：
while (true) {
    let num1 = prompt('请输入一个大于100的数字', '');
    if (num1 > 100 || num1 == '' || num1 == null) break; // 设置数字大于100或取消输入或空数字时停止循环。
}

// 方法二：
let num2;
do {
    num2 = prompt('请输入一个大于100的数字', '');
} while (num2 <=100 && num2); // 设置只有输入的数字在100以内且第二个条件也为真的时候循环，否则停止循环，因为 do while 可以先执行代码再根据条件循环，所以上面设置的变量可以不用赋值。

// 方法三：
let num3 = 1;
while (num3 <=100 && num3) { // 设置只有输入的数字在100以内且第二个条件也为真的时候循环，否则停止循环，又因为 while 语句需要满足条件才能执行里面的循环，所以上面设置的变量要符合条件赋值才能执行第一次循环（即变量范围是不能为0且不能大于100的数字）。
    num3 = prompt('请输入一个大于100的数字', '');
}


// 方法四：
for (let num4 = 1;num4 <= 100 && num4;) { // 设置只有输入的数字在100以内且第二个条件也为真的时候循环，否则停止循环，又因为 for 语句需要满足条件才能执行里面的循环，所以上面设置的变量要符合条件赋值才能执行第一次循环（即变量范围是不能为0且不能大于100的数字）。
    num4 = prompt('请输入一个大于100的数字', '')
}


// 任务七：输出素数（prime）
/* 
大于 1 且不能被除了 1 和它本身以外的任何数整除的整数叫做素数。
换句话说，n > 1 且不能被 1 和 n 以外的任何数整除的整数，被称为素数。
例如，5 是素数，因为它不能被 2、3 和 4 整除，会产生余数。
写一个可以输出 2 到 n 之间的所有素数的代码。
当 n = 10，结果输出 2、3、5、7。
P.S. 代码应适用于任何 n，而不是对任何固定值进行硬性调整。 */
let n = 10;

primeNumber:
for (let x = 2; x <= n; x++) { // 对每个自然数 i

  for (let y = 2; y < x; y++) { // 寻找一个除数……
    if (x % y == 0) continue primeNumber; // 不是素数，则继续检查下一个
  }

  alert( i ); // 输出素数
}