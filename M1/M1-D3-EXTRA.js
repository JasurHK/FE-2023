// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */
let gender
let isMale = false
gender = isMale ? 'male' :  'female'
console.log(gender)
//version 2
let agecheck 
let age = 17
agecheck = age>=18 ? 'you are old enough to ...' : 'ne go den'
console.log(agecheck)


/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
let firstNum = 3
let secondNum = 5

if ((firstNum === 8 || secondNum === 8) || (firstNum + secondNum === 8) || (firstNum - secondNum === 8)) {
    console.log('Correct, condition is one of them is true')
} else {
    console.log('None of them is correct')
}



/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */
let fullName = ''
let firstName = 'shoun'
let lastName = 'Doe'
fullName ='I am '+ firstName +' '+ lastName 
console.log(fullName)


/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
//ATTENTION PLEASE !!! CHECK THIS CAREFULLY
num1 = 20
num2 = 19
num3 = 18
if (num1 < num2 && num2 < num3){
    console.log (num1 , num2 , num3);
}
else if (num1 < num3 && num3 < num2){
    console.log (num1 , num3 , num2);
}
else if (num2 < num3 && num3 < num1){
    console.log (num2 , num3 , num1);
}
else if (num2 < num1 && num1 < num3){
    console.log (num2 , num3 , num1);
}
else if (num3 < num1 && num1 < num2){
    console.log (num3 , num1 , num2); 
}
else console.log(num3 ,num2 ,num1);

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE */
let integr1= 37
let integr2= 43
let averageint = (integr1 + integr2)/2
console.log(averageint)


/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */
console.log('The longest str below:')
let string1 = 'str1 is the longest string'
let string2 = 'str2 is the shortest'
if (string1.length > string2.length){
    console.log(string1 + ', and it is true')
}
else console.log(string2 + ', it is false')


/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE */
let givenvalue1 = 30
let givenvalue2 = '35'
console.log( typeof givenvalue2);

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */
let allstudents = 400
let fallingrait = '20%'
fallingrait = parseInt(fallingrait)
let failedstudents = (allstudents * fallingrait)/100
let passedstudents = allstudents - failedstudents
console.log('This semestr we have ' + passedstudents + ' passed students')

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */
for (let i =1  ; i <=10 ; i++ ){
    if (i % 2 !==0){
        console.log( i + ' is odd ');
    }
    else console.log( i + ' is even'); 
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
