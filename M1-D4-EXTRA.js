// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
let originalArray = ['A','B','C'];
let reversedArray = originalArray.reverse();
console.log(originalArray);
console.log(reversedArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
let numbers = [38, 81, 17, 21, 92, 48]
function findMaxValue(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let maxValue = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number' && numbers[i] > maxValue) {
        maxValue = numbers[i]; 
      }
    }
  
    return maxValue;
  }
  
let max = findMaxValue(numbers);
console.log("Maximum value:", max);
 
  

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

function findMinValue(numbers) {
    if (numbers.length === 0) {
      return undefined; 
    }
  
    let minValue = numbers[0]; 
  
    for (let i = 1; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number' && numbers[i] < minValue) {
        minValue = numbers[i]; 
      }
    }
  
    return minValue;
  }
  
let min = findMinValue(numbers);
console.log("Maximum value:", min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
