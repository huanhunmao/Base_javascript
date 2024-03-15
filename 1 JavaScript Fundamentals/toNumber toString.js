

// String 
// const num = 100 
// console.log('String(num) ', String(num) ); // '100'
 
// Number   Number(xxx) /  +(xxx)
// console.log(Number(undefined)); // NaN
// console.log(Number('123c')); // NaN
// console.log(+''); // 0
// console.log(+'\n'); // 0
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+null); // 0
// console.log(+NaN); // NaN

// Boolean ⚠️ 小心
console.log(Boolean('0')); // true
console.log(Boolean(' ')); // true
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false