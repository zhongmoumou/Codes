function countDown(time) {  // countDown 表示倒计时的意思
	let nowTime = +new Date();  // 这里表示出当前时间的时间戳（总毫秒数）

	let inputTime = +new Date(time);  // 这里表示用户输入的实际的时间戳（总毫秒数）

	let times = (inputTime - nowTime) / 1000;  // 这里计算出剩余时间的秒数 = 总毫秒数 / 1000

	let d = parseInt(times / 60 / 60 / 24);       // 计算天数
	let h = parseInt(times / 60 / 60 % 24);    // 计算小时
	let m = parseInt(times / 60 % 60);        // 计算分数
	let s = parseInt(times % 60);               // 计算秒数

	return d + '天' + h + m + s;
}

console.log(countDown(2021-12-3));