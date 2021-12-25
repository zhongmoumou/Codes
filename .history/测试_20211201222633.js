function IntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

console.log(intInclusive(1, 10)); // 输出： 0 到 10 之间的随机整数