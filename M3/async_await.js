function getWeather() {
    return new Promise (function(resolve , reject ){
        resolve ('Sunny')
    })
}
const promise = getWeather()
promise.then( (data)=>{
    console.log(data)
})
(async () => {
  await Promise.all([]).then((value) => {
    console.log(value) // resolves with empty array []
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
    console.log(value) // all promises resolve so returns [1,2,3,4]
  }, (error) => {
    console.log(error)
  })
  
  await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
    console.log(value)
  }, (error) => {
    console.log(error) // since 4th promise rejected, Promise.all also rejects with that value
  })
})()

// []
// [1,2,3,4]
// "error"
// function doubleChars(message) {
//   // write code here
//   let finalM = '' ;
//   for (let i = 0 ; i< message.length ; i++){
//     finalM += message[i] + message[i];
//   }
//   return finalM ;
// }
// console.log( doubleChars('hello bitch')) ;
// function doubleChars(message) {
//   let finalMessage = '';
//   for (let i = 0; i < message.length; i++) {
//     finalMessage += message[i] + message[i];
//   }
//   return finalMessage;
// }

// const doubledMessage = doubleChars('hello bitch');
// console.log(doubledMessage); // Output: "hheelllloo  bbiittcchh"

// function getSum(numbers) {
//   // write code here
//   let sum =0 ;
//   for (let i = 0 ; i < numbers.length ; i++){
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(getSum([1, 2, 6]))

// function removeZeros(number) {
//   // write code here
//   let stringNum = toString(number);
//   let loopedNum = '';
//   for(let i =0 ;i < stringNum.length ; i++){
//     if(stringNum[i] !=='0'){ 
//       loopedNum += stringNum[i];
//     }
//   }
//   return parseInt(loopedNum);
// }
// function removeZeros(number) {
//   let stringNum = String(number);
//   let loopedNum = '';
//   if(stringNum.length<=1){
//     return parseInt(stringNum);
//   }
//   for(let i = 0; i < stringNum.length; i++) {
//     if(stringNum[i] !== '0') {
//       loopedNum += stringNum[i];
//     }
//   }
//   return parseInt(loopedNum);
// }
// console.log(removeZeros(100004));
// function getLongestString(strings) {
//   // write code here
//   let longest = strings[0];
//   for (let i = 1; i < strings.length; i++){
//     if(longest.length<strings[i].length){
//       longest = strings[i];
//     }
//   } 
//   return longest; 
// }
// console.log(getLongestString(['One', 'two', 'khj']));
// function getAverageAge(years) {
//   let totalDuration = 0;
//   for (let i = 0; i < years.length; i++) {
//     let [birthYear, deathYear] = years[i].split('-').map(Number);
//     totalDuration += (deathYear - birthYear);
//   }
//   let averageDuration = totalDuration / years.length;
//   return Math.round(averageDuration);
// }
// console.log(getAverageAge(['1832-1905', '1876-1956', '1683-1724', '1714-1748']));