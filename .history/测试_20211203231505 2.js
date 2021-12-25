let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 1, "drum");

console.log(myFish);
console.log(removed);

// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除