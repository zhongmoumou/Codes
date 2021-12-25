function getDate() {
	let date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let dates = date.getDate();

	let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	let day = date.getDay();

	return '今天是：' + year + '年' + month + '月' + dates + '日 ' + week[day]
}



console.log(getDate()); 
// 输出：今天是：2021年12月1日 星期三