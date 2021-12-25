// 任务一：过滤数组中的唯一元素
/* 
定义 arr 为一个数组。
创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。

P.S. 这里用到了 string 类型，但其实可以是任何类型的值。
P.S. 使用 Set 来存储唯一值。
*/

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
    // 使用 set 可以去除重复的值，再使用 Array.from()可以从 set 中生成数组
}

alert( unique(values) );