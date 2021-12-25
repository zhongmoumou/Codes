function int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

console.log(int(1, 10)); // 输出： 0 到 10 之间的随机整数