function getTime() {
	let time = new Date();

	let hour = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

	return '现在的时间是：' + hour + ':' + minutes + ':' + seconds
}



console.log(getTime()); 
// 输出：现在的时间是：