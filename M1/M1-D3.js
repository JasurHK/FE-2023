/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */
let num1 = 12
let num2 = 20
let sum = (num1 + num2)
console.log('sum: '+sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12
console.log('x: '+ x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */
let name = 'John Doe'
console.log('name: '+ name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
let subtraction = (12-x)
console.log('subtraction: '+subtraction);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
let name1 = 'john'
let name2 = 'John'

console.log(name1===name2); //false
console.log(name1===name2.toLowerCase()); //true




/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */
let y = 5
if (y == 1){
    console.log(y + ' is one');
}
else if (y == 2){
    console.log(y + ' is two');
}
else if (y == 3){
    console.log(y + ' is thre');
}
else if (y == 4){
    console.log(y + ' is four');
}
else if (y == 5){
    console.log(y + ' is five');
}
else if (y == 6){
    console.log(y + ' is six');
}
else if (y == 7){
    console.log(y + ' is seven');
}
else if (y == 8){
    console.log(y + ' is eight');
}
else if (y == 9){
    console.log(y + ' is nine');
}
else console.log(y + ' is ten');
// SHORTE VERSION BELOW;
let z = 4
let numberLiterals = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

console.log(numberLiterals[z]);



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message);

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
