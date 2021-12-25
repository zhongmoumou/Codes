function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

alert(sort([10, 322, 33, 24, 105, 96, 73, 84]));  // 输出：322,105,96,84,73,33,24,10