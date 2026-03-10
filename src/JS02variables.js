//var, let and const

/**
 * 1. var: used in old JS and it has limited usage in the modern JS file coz duplicate variables is allowed
 * 2. var is function scoped and can be redeclared and updated
 * 3. var variables are hoisted to the top of their scope and initialized with undefined
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

/**
 * 
 */