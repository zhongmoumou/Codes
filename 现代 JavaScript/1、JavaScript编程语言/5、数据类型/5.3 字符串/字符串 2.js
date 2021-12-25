// 任务一：首字母大写。
/* 
写一个函数 ucFirst(str)，并返回首字母大写的字符串 str，例如：

ucFirst("john") == "John"; 
*/

function ucFirst(str) {
    alert( str[2].toUpperCase() ); // 将第 2 位置变为大小
}

ucFirst('john');


// 任务二：检查 spam。
/* 
写一个函数 checkSpam(str)，如果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。

函数必须不区分大小写：

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

/* 老方法使用 str.indexOf('str') 
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    if (lowerStr.indexOf('viagra')!= -1) {
        alert('true');
    } else if (lowerStr.indexOf('xxx') != -1) {
        alert('true');
    } else {
        alert('false');
    }
};  */

function checkSpam(str) {
    let lowerStr = str.toLowerCase(); // 将字符串全部变成小写

    alert( lowerStr.includes('viagra') || lowerStr.includes('xxx') );
    // 只要字符串（带进函数里面就变小写了）里面包含了'viagra'或'xxx'就输出 true，否则输出 false；
}


checkSpam('hello Viagra');
checkSpam('hello world');
checkSpam('hello VXxx');


// 任务三：截断文本。
/* 
创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。

函数的结果应该是截断后的文本（如果需要的话）。

例如：

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"
*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        alert( str.slice(0,maxlength) + '...'); // 使用str.slice(a, b)来提取字符串，从a开始到b结束（不包括b）
    } else {
        alert(str);
    }
}

truncate("What I'd like to tell on this topic is:", 20);

// 任务四：提取货币。
/* 
我们有以 "$120" 这样的格式表示的花销。意味着：先是美元符号，然后才是数值。

创建函数 extractCurrencyValue(str) 从字符串中提取数值并返回。

例如：

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
    alert( str.slice(1) ); // str.slice如果不写第二个参数，则会一直运行到字符串的末尾；
}

extractCurrencyValue('$108');