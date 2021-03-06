// 任务一：将 "switch" 结构重写为 "if..else" 结构
/* 
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
let browser;
if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome') {
    alert('Okay we support these browsers too');
} else if (browser === 'Firefox') {
    alert('Okay we support these browsers too');
} else if (browser === 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
/* 或
let browser;
if (browser === 'Edge') {
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome'
  || browser === 'Firefox'
  || browser === 'Safari'
  || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
*/

// 任务二：将 "if" 结构重写为 "switch" 结构
/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
let a = +prompt('a?', '')
switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}