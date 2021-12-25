// 任务一：是否需要 “else”？如果 else 被删除，函数的工作方式会不同吗？
/* 
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
} 

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

*/
// 结果是不会，else删除不影响函数正常运行；


// 任务二：使用 '?' 或者 '||' 重写函数，重写这个函数并保证效果相同，不使用 if，且只需一行代码。
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Do you have your parents permission to access this page?');
    }
}
/* 
使用 ? 重写：
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

使用 || 重写：
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
*/


// 任务三：函数 min(a, b)，写一个返回数字 a 和 b 中较小的那个数字的函数 min(a,b)。
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
// 或：
  function min(c, d) {
    return c < d ? c : d;
  }


// 任务四：函数 pow(x,n)，写一个函数 pow(x,n)，返回 x 的 n 次方。换句话说，将 x 与自身相乘 n 次，返回最终结果

  
  let x = prompt("x?", '');
  let n = prompt("n?", '');

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }