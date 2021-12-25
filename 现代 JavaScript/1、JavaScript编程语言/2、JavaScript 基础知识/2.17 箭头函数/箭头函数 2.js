// 任务：用箭头函数重写下面的函数表达式
/* 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

// 方法1.1：用箭头函数(1)
let ask = (question, yes, no) => {
    if (confirm('Do you agree?')) {
        yes ();
    } else {
        no ()
    }
}
function yeser() {
    alert('You agreed.');
}
function noer() {
    alert('You canceled the execution.');
}

ask('Do you agree?', yeser, noer);


// 方法1.2：用箭头函数(2)
let ask = (question, yes, no) => {
    if (confirm('Do you agree?')) {
        yes ();
    } else {
        no ()
    }
}
ask(
    'Do you agree?',
    function () { alert('You agreed.');},
    function noer() { alert('You canceled the execution.');}
);


// 方法1.3：用箭头函数(3)
let ask = (question, yes, no) => {
    if (confirm('Do you agree?')) {
        yes ();
    } else {
        no ()
    }
}
ask(
    'Do you agree?',
    () => alert('You agreed.'),
    () => alert('You canceled the execution.')
);