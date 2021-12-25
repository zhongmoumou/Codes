let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 1, "drum");

console.log(myFish);  // 输出截取后的元数组：["angel", "clown", "drum", "sturgeon"]
console.log(removed);  // 输出被删除的元素：['mandarin']

// 运算后的 myFish: 
// 被删除的元素: [], 没有元素被删除