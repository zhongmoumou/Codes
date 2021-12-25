/*
任务一： 数组被拷贝了吗?

下面的代码将会显示什么？
*/

let fruits = ["Apples", "Pear", "Orange"];

// 在“副本”里 push 了一个新的值
let shoppingCart = fruits;
shoppingCart.push("Banana");

// fruits 里面是什么？
alert( fruits.length ); // 答：输出的结果是 4，因为数组 fruits的值复制给了数组 shoppingCart，然后数组 shoppingCart又在最后增加了一个值”banana“，变成了 shoppingCart = ["Apples", "Pear", "Orange", "banana"]，所以数组 shoppingCart 的长度是 4.