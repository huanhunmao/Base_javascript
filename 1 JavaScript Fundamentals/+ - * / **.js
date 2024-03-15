// 阶乘   注意
console.log(2 ** 3);  // 8
console.log(2 ^ 3 );// 1 按位异或运算 不是阶乘 

// +xx 字符串 转数字 计算 
let p1 = '2'
let p2 = '3'
console.log(+p1 + +p2); // 5


// 这地方小心 不管是 ++b/b++ 到头来 b 都会增加
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?  注意这个操作后 d 不加
// console.log(c); // 2
// console.log(d); // 1
// console.log(a); // 2
// console.log(b); // 2


let a1 = 2;

let x = 1 + (a1 *= 2);
// console.log('x',x); // 5


// What are results of these expressions?
"" + 1 + 0  // 10
"" - 1 + 0  // -1  注意这个 首先执行 "" - 1，无法将空字符串转换为数字进行减法运算，返回 NaN，然后加上 0，NaN 与任何数相加还是 NaN
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '45px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // ' -9  5'
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // NaN


// fix 
let a2 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);

alert(+a2 + +b2); // 3