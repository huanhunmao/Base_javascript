typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// What is the output of the script?
let name = "Ilya";

console.log( `hello ${1}` ); // ? hello 1

console.log( `hello ${"name"}` ); // ? hello name

console.log( `hello ${name}` ); // ? hello Ilya