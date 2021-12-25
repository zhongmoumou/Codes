/* 
任务一：对数字求和到给定值

编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

举个例子：

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050 

用三种方式实现：

使用循环。
使用递归，对 n > 1 执行 sumTo(n) = n + sumTo(n-1)。
使用 等差数列 求和公式.
*/

// 方法一：循环
function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

alert( sumTo(100) );

// 方法二：递归
function sumTo2(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}

alert( sumTo2(100) );


// 方法三：公式 sumTo(n) = n*(n+1)/2
function sumTo3(n) {
    return n * (n+1) / 2
}

alert( sumTo3(100) );