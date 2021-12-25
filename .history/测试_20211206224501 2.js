let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(1, 1, "drum");

console.log(myFish);  // 输出截取后的元数组：["angel", "clown", "drum", "sturgeon"]
console.log(removed);  // 输出被删除的元素：['mandarin']

// arr.splice(start, deleteCount, item1...)

/* start：指定修改的开始位置（从 0 计数），如果超出了数组的长度，则从数组末尾开始添加内容；
如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；
如果负数的绝对值大于数组的长度，则表示开始位置为第0位。 */
// deleteCount：整数，表示要移除的数组元素的个数。
// item1：要添加进数组的元素，从start 位置开始。如果不指定，则 splice() 将只删除数组元素。