function reverse(arr) {
  let newArr = [];  // 创建一个新的数组

  for (let i = arr.length-1; i >= 0; i--) {  // 用 for 循环，依次将 arr 数组的数据以从后往前的顺序输入到新数组 newArr 中
    newArr[newArr.length] = arr[i];  //  newArr.length 的初始值为 0，每当存入一个值后，newArr.length 的值加 1
  }

  return newArr;
}

console.log( reverse([1, 2, 3, 4, 5]) );  // 输出：5,4,3,2,1