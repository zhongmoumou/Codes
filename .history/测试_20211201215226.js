let obj = {
  PI: 3.1415926535898,
  Max: function() {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (max > arguments[i]) {
        max = arguments[i];
      }
      return max;
    }
  },
  min: function() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      if (min > arguments[i]) {
        min = arguments[i];
      }
      return min;
    }
  }
}

console.log(obj.PI);  // 输出：3.1415926535898
console.log(obj.max(1, 2, 3, 4, 5, 6, 7, 8, 9));  // 输出：9
console.log(obj.min(1, 2, 3, 4, 5, 6, 7, 8, 9));  // 输出：1