//var, let and const

/** var usage
 * 1. used in old JS and it has limited usage in the modern JS file coz duplicate variables is allowed
 * 2. is function scoped and can be redeclared and updated
 * 3. variables are hoisted to the top of their scope and initialized with undefined
 */

//Re-Declaration of same variable name is allowed
var firstName = "John";
console.log(firstName); // John

var lastName = "Doe";
console.log(lastName); // Doe

var firstName = 'Test';
console.log(firstName); // Test

var lastName = 'Tester';
console.log(lastName); // Tester

//Reassignment for the same variable is allowed
var num = 100;
num = 200;
num = 300;
console.log(num);


//Hoisting: Allowed without any error
console.log(temp);//undefined
var temp = 90;
console.log(temp);

/** let usage
 * cannot be re declared
 * Reassigment for the same variable is allowed
 * Hoisiting is not allowed without declaration
 */

//Re-declaration of same variable name is not allowed, it throws an error in while compiling code
let x = 10;
//let x = 20; // SyntaxError: Identifier 'x' has already been declared

//Reassignment for the same variable is allowed
let y = 10;
y = 20;

//Hoisiting is not allowed without declaration as it throws an error
//console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 100;
console.log(z);


/**
 * const usage
 */

//Re-declararation is not allowed
const name = 'Test';
name = 'Tester'; //TypeError: Assignment to constant variable.

const PI = 3.14;
PI = 4;

//Duplicate variable is not allowed
const name = 'QA';

//Hoisting is not allowed
console.log(size); //ReferenceError: Cannot access 'size' before initialization
const size = 10;
console.log(size);