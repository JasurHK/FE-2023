/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE1---------------/');
function area(L1 , L2)  {
    return L1 * L2 ;
};
let length1= 13 ;
let length2= 7 ;
let rectanglearea= area(length1,length2);
console.log(`Rectangle area : ${rectanglearea}`)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE2---------------/');
function crazySum(int1 , int2) {
    if ( int1 == int2 ){
        return (int1 +int2)*3 ;
    }
    else return int1+int2 ;
};
let num1 = 5 ;
let num2 = 5 ;
let sumofNums = crazySum(num1,num2) ;
console.log(`Sum of intefers : ${sumofNums}`);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE3---------------/');
function crazyDiff (number){
    const difference = Math.abs(number - 19); // i used Math.abs method to compute the absolute differrence between given number and 19
    if (number > 19){
        return difference * 3;
    }
    else return difference;
};
let num3 = 24 ;
let num4 = 16 ;
let resultofnum3 = crazyDiff(num3) ;
console.log(`Result is : ${resultofnum3}`);
let resultofnum4 = crazyDiff(num4) ;
console.log(`Result is : ${resultofnum4}`);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE4---------------/');
function boundary(n){
    if ( n >= 20 && n <= 100 || n ==400){
        return true
    }
    else return false
};
let boundaryNum = 87 ;
let boundaryResult = boundary(boundaryNum) ;
console.log(`Boundary result : ${boundaryResult}`);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE5---------------/');
function strivife(str) {
    if (str.startsWith('Strive')){
        return str 
    }
    else return 'Strive ' + str 
};
console.log(strivife('Strive school'));
console.log(strivife('school'));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE6---------------/');
function check3and7(pNumber) {
    if (pNumber % 3 == 0 && pNumber % 7 == 0 ){
        return pNumber + ' multiple of both 3 and 7'
    }
    else if (pNumber % 3 == 0  ){
        return pNumber + ' multiple of 3'
    }
    else if (pNumber % 7 == 0){
        return pNumber + ' multiple of 7'
    }
    else return pNumber + ' is not multiple of any'
};
let positivNum = 49 ;
console.log(check3and7(positivNum));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE7---------------/');
function reverseString(rstring) {
    return rstring.split('').reverse('').join('')
    
};
console.log(reverseString('Strive'));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE8---------------/');
function upperFirst(char) {
    return char.charAt(0).toUpperCase('') + char.slice(1);
}
console.log(upperFirst('hello Lolitto'));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE9---------------/');
function cutString(cutstr) {       //ATTENTION before solving this i did not look to SOLUTIONS
    return cutstr.slice(1,-1);
}
console.log(cutString('mario'));
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
console.log('/--------------EXERCISE10---------------/');
function giveMeRandom(n) {
    const randomArray = [];
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11); // gives a random number between 0 and 10
      randomArray.push(randomNumber);
    }
    return randomArray;
}
console.log(giveMeRandom(10));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
