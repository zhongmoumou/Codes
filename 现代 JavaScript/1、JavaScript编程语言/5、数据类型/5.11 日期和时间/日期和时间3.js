/* 
任务三：欧洲的星期表示方法

欧洲国家的星期计算是从星期一（数字 1）开始的，然后是星期二（数字 2），直到星期日（数字 7）。编写一个函数 getLocalDay(date)，并返回日期的欧洲式星期数。
*/

let date = new Date(2021, 6, 7);  // 设置时间2021年7月7日

function getLocalDay(date) {

    // let day = date.getDay();  也可以把获取日期的方法 date.getDay() 赋值给变量 day，然后带入下面 if

    if (date.getDay() == 0) { 
        date.getDay() = 7; 
    }
    /* 
    JS 是从 0（星期日）到 6（星期六），欧洲国家是从 1（星期一）到 7（星期日），
    对比发现，要把 JS 中的星期计算方法转换为欧洲计算方法，只需要设置 JS中星期日（0）等欧洲的星期日（7）就行，
    即 date.getDay() == 0 的时候，设定 date.getDay() = 7 就可以了
    （因为后面按顺序欧洲星期一到星期六（1-6）等于 JS 中 .getDay() 的 星期一到星期六（1-6），所以不必写条件语句了）
    */
  
    return date.getDay();
}

alert( getLocalDay(date) );       // 星期三，应该显示 3