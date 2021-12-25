// 任务：以下表达式的执行结果是？
5 > 4 // 输出 true
"apple" > "pineapple" // 输出 false
"2" > "12" // 输出 true(字符串比较大小按照词典顺序比较，先比第一个 2 > 1)
undefined == null // 输出 true(null 只与 undefined 互等)
undefined === null // 输出 false(严格相等模式下，类型不同得 false)
null == "\n0\n" // 输出 false(null 只与 undefined 互等)
null === +"\n0\n" // 输出 false(严格相等模式下，类型不同得 false)