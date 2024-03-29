/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
console.log('/-------------EXERCISE-A------------/');
let test = 'stringValue'
console.log(test);

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log('/-------------EXERCISE-B------------/');
let sum = 10 + 20
console.log(sum);

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log('/-------------EXERCISE-C------------/');
const random = Math.floor(Math.random() * 20)
console.log(random);


/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log('/-------------EXERCISE-D------------/');
const me = {
  name : 'Jasur',
  age : '20',
  email : 'jasurhakimov007@gmail.com'
};
console.log(me);

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log('/-------------EXERCISE-E------------/');
delete me.age ;
console.log(me);

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
console.log('/-------------EXERCISE-F------------/');
me.skills = ['ran','swim','cook'];
console.log(me);

/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log('/-------------EXERCISE-G------------/');
delete me.skills.pop();
console.log(me);

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
console.log('/-------------EXERCISE-1------------/');
const dice = function(){
  const randomize = Math.floor(Math.random() * 6 + 1) ;
  return randomize
};
console.log(dice());

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
console.log('/-------------EXERCISE-2------------/');
function whoIsBigger(num1,num2){
  return (num1>num2) ? num1 : num2  
};
// if (num1 > num2 ){
//   return num1
// }

// else {
//   return num2 
  
// } 

console.log(whoIsBigger(7,9));

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log('/-------------EXERCISE-3------------/');
function splitMe(str) {
  return str.split(" ");
}

const result = splitMe("I love coding");
console.log(result);


/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log('/-------------EXERCISE-4------------/');
function deleteOne(str,booleann) {
  if (booleann){
    return str.slice(1)
  }
  else return str.slice(0,-1)
  
};
console.log(deleteOne('hello',true));
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
console.log('/-------------EXERCISE-5------------/');

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log('/-------------EXERCISE-6------------/');
function isThisAnEmail(email) {
  let validetr = /^(([^<>();:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let isEmailValid = email.match(validetr)
  if (isEmailValid){
    console.log(true);
  } else {
    console.log(false);
  }
  
}; 
isThisAnEmail('jasurhakimov007')
/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
console.log('/-------------EXERCISE-7------------/');


/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log('/-------------EXERCISE-8------------/');
function rollTheDices(n) {
  let diceObj = {
    sum:0,
    valeu : [] 
  }
  for (let i = 0 ; i < n ; i++) {
    let diceNum = dice()
    diceObj.sum += diceNum
    diceObj.valeu.push(diceNum)
  }
  return diceObj
}
console.log(rollTheDices(5));


// function howManyDays(date) {
//   const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

//   // Parse the given date string into a Date object
//   const givenDate = new Date(date);

//   // Get the current date
//   const currentDate = new Date();

//   // Calculate the difference in days
//   const diffDays = Math.round(Math.abs((givenDate - currentDate) / oneDay));

//   return diffDays;
// }

// const resultd = howManyDays("2023-05-30"); // Provide the date in "YYYY-MM-DD" format
// console.log(resultd);
/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
console.log('/-------------EXERCISE-9------------/');



/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/
console.log('/-------------EXERCISE-10------------/');
function isTodayMyBirthday() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth()+1;

  if ( day ===5 && month===6){
    return true ;
  }
  else{
    return false ;
  };
};
console.log(isTodayMyBirthday());

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/
console.log('/-------------EXERCISE-11------------/');
let newObj = {
  name : 'mario',
  model : 'hdd',
};
function deleteProp(obj,str) {
  const strReplace = str.replace( '', "");
  return delete obj.strReplace;
};
console.log(deleteProp(newObj,'name'));

//ATTENTION FROM 12 to 21 UNSWERS ARE BELOW THE 'MOVIES' ARRAY !!!

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
//  console.log('/-------------EXERCISE-12------------/');
//  function oldestMovie(arrOfMovies) {
//    let oldest = arrOfMovies[0]
//    for ( i = 1 ; i < arrOfMovie.length ; i ++){
//      if (arrOfMovies[i].Year < oldest.Year ){
//        oldest = arrOfMovies[i]
//      };
//    };
//    return oldest;
// };
// console.log(oldestMovie(movies));

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/
// console.log('/-------------EXERCISE-13------------/');
// function countMovies(arrOfMovie) {
//   let count = 0
//   for ( let i = 0 ; i < arrOfMovie.length ; i++) {
//     count = arrOfMovie[i]
//   }
//   return count
// };
// console.log(countMovies(movies));

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
// console.log('/-------------EXERCISE-14------------/');
// function onlyTheTitles(arrOfMovie) {
//   let arrayOfTitles = [];
//   for ( let i = 0 ; i < arrOfMovie.length ; i++){
//     let titles = arrOfMovie.Title
//     titles.push(arrayOfTitles)
//   };
//   return arrayOfTitles
  
// };
// console.log(arrayOfTitles(movies));

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/
// console.log('/-------------EXERCISE-15------------/');
// function onlyInThisMillennium(arrOfMovie) {
//   let thisMillennium = [];
//   for(let i = 0 ; i < arrOfMovie.length ; i++){
//     if(arrOfMovie[i].Year >= 2000){
//       thisMillennium.push(arrOfMovie[i]);
//     };
//   };
//   return thisMillennium
// };
// console.log(onlyInThisMillennium(movies));

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
// function getMovieById(idOfmovie) {
//   let givenId = idOfmovie;
//   for ( let i = 0 ; i < movies.length ; i++){
//     if ( movies.imdbID == givenId){
//       return movies[i];
//     }
//     else{
//       return console.log('INvalid ID');
//     };
//   };
// };
// console.log(getMovieById("tt0399295"));

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/
// function sumAllTheYears(arrOfMovies) {
//   let totalSumOfYears = 0 ;
//   for ( let i = 0 ; arrOfMovies.length ; i++){
//     totalSumOfYears.add(arrOfMovies[i].Year); 
//   };
//   return totalSumOfYears;
// };
// console.log(sumAllTheYears(movies));

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/
// function searchByTitle(arrOfMovies,givenStr) {
//   let = filtredMovies = arrOfMovies.filter(arrOfMovies => arrOfMovies.Title.toLowerCase());
//   let = filtredStrMovies = arrOfMovies.includes(givenStr.toLowerCase());
//   return filtredStrMovies ;
// };
// console.log(searchByTitle(movies, 'rings'));

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/
// function searchAndDivide(arrOfMovies, str) {
//   let devidedObj = {
//     match : [],
//     unmatch : [],
//   };
//   // let = filtredMovies = arrOfMovies.filter(arrOfMovies => arrOfMovies.Title.toLowerCase().includes(givenStr.toLowerCase()));
//   arrOfMovies.forEach(movie => {
//     if (arrOfMovies.Title.toLowerCase().includes(givenStr.toLowerCase())){
//       devidedObj.match.push(movie)
//     }
//     else {
//       devidedObj.unmatch.push(movie)
//     };
//   });
//   return devidedObj;
// };
// console.log(searchAndDivide(movies, 'Lord'));

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/
// function removeIndex(arrOfMovies, index) {
//   let removeGivenIndex = arrOfMovies.splice(index , 1);
//   return removeGivenIndex
// };;
// console.log(removeIndex(movies , 1));

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log('/-------------EXERCISE-21------------/');
function halfTree(height) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  };
};
halfTree(5)

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
console.log('/-------------EXERCISE-21------------/');
function tree(height) {
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  };
};
tree(5);

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
function isPrime(givenNum) {
  if (givenNum <= 1) {
    return false;
  };

  for (let i = 2; i <= Math.sqrt(givenNum); i++) {
    if (givenNum % i === 0) {
      return false;
    };
  };

  return true;
};
console.log(isPrime(7));


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
// console.log('/-------------EXERCISE-12------------/');
// function oldestMovie(movies) {
//   let oldest = movies[0];

//   for (let i = 1; i < movies.length; i++) {
//     if (movies[i].Year < oldest.Year) {
//       oldest = movies[i];
//     }
//   }

//   return oldest;
// };



// const oldest = oldestMovie(movies);
// console.log(oldest);


// console.log('/-------------EXERCISE-13------------/');
// function countMovies(arrOfMovie) {
//   let count = arrOfMovie.length;
//   return count;
// };
// console.log(countMovies(movies));

// console.log('/-------------EXERCISE-14------------/');
// function onlyTheTitles(arrOfMovie) {
//   let titles = arrOfMovie.map(arrOfMovie => arrOfMovie.Title);
//   return titles;
//   // let arrayOfTitles = [];
//   // for ( let i = 0 ; i < arrOfMovie.length ; i++){
//   //   // let titles = arrOfMovie.Title
//   //   // arrayOfTitles.push(titles)
//   //   console.log(arrOfMovie.Title);
//   // };
//   // return arrayOfTitles
  
// };
// console.log(onlyTheTitles(movies));

// console.log('/-------------EXERCISE-15------------/');
// function onlyInThisMillennium(arrOfMovie) {
//   let thisMillennium = [];
//   for(let i = 0 ; i < arrOfMovie.length ; i++){
//     if(arrOfMovie[i].Year >= 2000){
//       thisMillennium.push(arrOfMovie[i]); 
//     };
//   };
//   return thisMillennium
// };
// console.log(onlyInThisMillennium(movies));

// console.log('/-------------EXERCISE-16------------/');

// function getMovieById(movies ,idOfmovie) {
//   let wantedMovie = movies.find(movies => movies.imdbID === idOfmovie);
//   return wantedMovie ;
//   // let wantedMovie = idOfmovie;
//   // for ( let i = 0 ; i < movies.length ; i++){
//   //   if ( movies[i].imdbID == wantedMovie){
//   //     return movies[i];
//   //   }
//   //   // else{
//   //   //   return console.log('INvalid ID');
//   //   // };
//   // };
// };
// console.log(getMovieById(movies ,'tt0399295'));

// console.log('/-------------EXERCISE-17------------/');

// function sumAllTheYears(arrOfMovies) {
//   let totalSumOfYears = arrOfMovies.reduce((total, arrOfMovies) => total + arrOfMovies.Year, 0 );
//   return totalSumOfYears;
//   // let totalSumOfYears = 0 ;
//   // for ( let i = 0 ; arrOfMovies.length ; i++){
//   //   let addYear = arrOfMovies[i].Year;
//   //   totalSumOfYears = addYear; 
//   // };
//   // return totalSumOfYears;
// };
// console.log(sumAllTheYears(movies));

// console.log('/-------------EXERCISE-18------------/');

// function searchByTitle(arrOfMovies,givenStr) {
//   let = filtredMovies = arrOfMovies.filter(arrOfMovies => arrOfMovies.Title.toLowerCase().includes(givenStr.toLowerCase()));
//   return filtredMovies;
  
// };
// console.log(searchByTitle(movies, 'Lord'));

// console.log('/-------------EXERCISE-19------------/');

// function searchAndDivide(arrOfMovies, givenStr) {
//   let devidedObj = {
//     match : [],
//     unmatch : [],
//   };
//   // let = filtredMovies = arrOfMovies.filter(arrOfMovies => arrOfMovies.Title.toLowerCase().includes(givenStr.toLowerCase()));
//   arrOfMovies.forEach(movie => {
//     if (movie.Title.toLowerCase().includes(givenStr.toLowerCase())){
//       devidedObj.match.push(movie)
//     }
//     else {
//       devidedObj.unmatch.push(movie)
//     };
//   });
//   return devidedObj;
// };
// console.log(searchAndDivide(movies, 'Lord'));

// console.log('/-------------EXERCISE-20------------/');

// function removeIndex(index) {
//   movies.splice(index , 1);
//   return movies
// };;
// console.log(removeIndex( 2));