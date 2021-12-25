function countDown(time) {  // countDown 表示倒计时的意思
	let nowTime = +new Date();  // 这里表示出当前时间的时间戳（总毫秒数）

	let inputTime = +new Date(time);  // 这里表示用户输入的实际的时间戳（总毫秒数）

	let times = (inputTime - nowTime) / 1000;  // 这里计算出剩余时间的秒数 = 总毫秒数 / 1000

	let d = parseInt(times / 60 / 60 / 24);       // 计算天数
	let h = parseInt(times / 60 / 60 % 24);    // 计算小时
  h = h < 10 ? '0' + h : h;

	let m = parseInt(times / 60 % 60);        // 计算分数
  m = m < 10 ? '0' + m : m;
  
  let s = parseInt(times % 60);               // 计算秒数
  s = s < 10 ? '0' + s : s;

	return '倒计时：' + d + '天' + h + '时' + m + '分' + s + '秒';
}

console.log(countDown('2021/12/30 09:00'));