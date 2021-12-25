function getTime() {
	let time = new Date();

	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	return '现在的时间是：' + hour + ':' + minutes + ':' + seconds
}



console.log(getTime()); 
// 输出：今天是：2021年12月1日 星期三