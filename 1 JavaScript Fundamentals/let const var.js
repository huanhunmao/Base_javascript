// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin, name 
name = 'John'
admin = name
console.log(admin); // John



// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let our_planet = 'Earth'
// var  our_planet  = 'Earth'
// const our_planet = 'Earth'

let currentUserName = "John";


// const can not change
// Would it be right to use upper case for birthday? For age? Or even for both?
let birthday = '18.04.1982';

const age = someCode(birthday);
console.log('age',age);

function someCode(code) {
    return code.toUpperCase()
}