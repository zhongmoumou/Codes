function arbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(arbitrary(1, 10)); // 输出： 0 到 10 之间的随机数