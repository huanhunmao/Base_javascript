// 注意  1 && 2 =  2 而不是 true  相当于向后传递 返回最后一个符合的值
//  0 && 2 =  0 而不是 false  返回第一个不符合的值 

// 1 || 2 = 1  结果不是 true   返回第一个满足要求值
// 0 || 1 = 1  
console.log( null || 2 || undefined ); // 2

console.log( console.log(1) || 2 || console.log(3) ); // 打印 1 2 注意   第一个  console.log(1) 不会返回任何东西 是 undefined 导致 2 也会打印

console.log( 1 && null && 2 ); // null 注意这个地方 不是 false  && 返回第一个错误的值

console.log( console.log(1) && console.log(2) ); // undefined 注意  console.log(1) 无返回值 或者说返回 undefined

console.log( null || 2 && 3 || 4); // 3 注意  2 && 3 = 3 不是 true


// 
let age
if(age >= 14 && age <= 90){}

// 下面表达 ！相反的区间

if(age < 14 || age > 90){}

if(!(age >= 14 && age <= 90)){}


//  
if (-1 || 0) console.log( 'first' ); // first  注意  -1 || 0 -> -1 是 truly
if (-1 && 0) console.log( 'second' ); // 无结果  -1 && 0 --> 0
if (null || -1 && 1) console.log( 'third' ); // third  null || -1 && 1 --> -1 && 1 --> 1

// 最简单的校验是不是 这个人 密码对不对
let value  = prompt("Who's there?")

if(value === 'Admin'){
    let password  = prompt("Please input password")
    if(password === 'TheMaster'){
        alert('Welcome')
    }else if(password === 'Other'){
        alert('Wrong password')
    }else{
        alert('Canceled')
    }
}else if( value === 'Other'){
    alert("I don't know you")
}else{
    alert('Canceled')
}