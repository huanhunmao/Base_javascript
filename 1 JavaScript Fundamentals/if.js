


if ("0") { // true 
    console.log('Hello') // 'Hello'
  }


// 
let name = prompt('What is the “official” name of JavaScript?', '');

if (name == 'ECMAScript') {
  alert( 'Right!' );
} else {
  alert( 'You don’t know? ECMAScript!' ); 
}


// 
let value = prompt('Type a number', 0);
if(value > 0){
    return 1
}else if (value < 0){
    return -1
}else{
    return 0
}

// Rewrite 'if' into '?'
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

 result = (a + b < 4) ? 'Below' :'Over'


// 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// 实际没人这样写  如果有 打他
message =( login == 'Employee') ?  'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';