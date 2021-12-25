/* 程序随机生成一个 1~10 之间的数字（整数），并让用户输入一个数字，

1、如果大于该数字，就提示，数字大了，继续猜；

2、如果小于该数字，就提示，数字小了，继续猜；

3、如果等于该数字，就提示，数字猜对了，结束程序； */




function intInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

let num2 = intInclusive(1, 10);

while(true) {
  let num1 = prompt('请输入一个 1-10 之间的随机整数：');

  if (num1 < num2 ) {
    alert('猜小了，请您继续猜！');
  } else if (num1 > num2) {
    console.log('猜大了，请您继续猜！');
  } else {
    console.log('恭喜您猜对了！');
    break;
  }
} 
