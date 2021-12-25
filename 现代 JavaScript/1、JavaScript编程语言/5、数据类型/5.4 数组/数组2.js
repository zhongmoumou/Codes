/* 
任务二：数组操作。

我们试试下面的 5 个数组操作。

1.创建一个数组 styles，里面存储有 “Jazz” 和 “Blues”。
2.将 “Rock-n-Roll” 从数组末端添加进去。
3.用 “Classics” 替换掉数组最中间的元素。查找数组最中间的元素的代码应该适用于任何奇数长度的数组。
4.去掉数组的第一个值并显示它。
5.在数组前面添加 Rap 和 Reggae。
过程中的数组：

Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[ (styles.length-1)/2 ] = "Classics"; // 要寻找最中间的数组，说明这是个奇数数组，可以用数组长度（length-1）/ 2 来表示

alert( styles.shift() );

styles.unshift("Rap", "Reggae");