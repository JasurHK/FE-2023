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
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 1 ---------------------');
let positiveNumbers = [34 , 82 , 7, 13, 51];
console.log(positiveNumbers)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 2 ---------------------');
let myID = {
    name: 'Jasur',
    surname: 'Hkimov',
    email: 'jasurhakinov@gmail.com',
    age: 20,
    adress : {
        street: 'Lucka',
        city: 'Warsow',
        country: 'Poland',
    }
}
console.log(myID);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 3 ---------------------');
myID['haveLicense' ]= false
console.log(myID)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 4 ---------------------');
delete myID.age;
console.log(myID)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 5 ---------------------');
let person = {
    name: 'Mickel',
    surname: 'Carloni',
    email: 'carloniM@gmail.com',
    age: 27,
    adress : {
        street: 'L',
        city: 'Cicilia',
        country: 'Italy',
    }
}
person.email ='MickelC@gmail.com';
console.log(person);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
//ATTENTION!!!
console.log('----------------EXERCISE 6 ---------------------');
let totalShoppingCart = 51
let hasPromotion = totalShoppingCart >=50 ? true : false
let totalCostt = hasPromotion == true ? totalShoppingCart + 0 : totalShoppingCart + 10

console.log(`Total cost : ${totalCostt} pln`);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 7 ---------------------');
let price = 100 //pln
let discount = 20 //%
let shippingcost = 10 //pln
let discountedprice = (price-(price*discount)/100);
let totalcost = (discountedprice + shippingcost) ;
console.log(`Discounted price: ${discountedprice} pln`);
console.log( `Shipping cost: ${shippingcost} pln will be charged`);
console.log(`Totalcost: ${totalcost} pln`);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 8 ---------------------');
let car = {
    brand : 'Ford' ,
    model :'Mustang' ,
    licensePlate :'WI234' ,
}
let car1 = { ...car };  //chatGPT cila :)!clonning method
car1['licensePlate'] = 'KM432'
let car2 = { ...car };  
car2['licensePlate'] = 'HA587'
let car3 = Object.assign({},car);
car3.licensePlate = 'GM169'
let car4 = Object.assign({},car);
car4.licensePlate = 'DC309'

console.log(car);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 9 ---------------------');
let carsForRent =[car,car1,car2,car3,car4]
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 10 ---------------------');
carsForRent.splice(4,1)
carsForRent.splice(0,1)
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 11 ---------------------');
console.log( typeof car);
console.log(typeof car.licensePlate);
console.log(typeof car.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 12 ---------------------');
let carsForsale = [];
carsForsale.push(car1);
carsForsale.push(car2);
carsForsale.push(car3);
let totalCarsforsale = carsForsale.length

console.log(carsForsale);
console.log(`Total amount of cars for sale: ${totalCarsforsale}`);   


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
console.log('----------------EXERCISE 13 ---------------------');
console.log('Cars for sale');
for (i = 0; i <+ totalCarsforsale; i++){
    console.log(`${i+1} -car's information: ${carsForsale[i]}`);
}  //OR 2- VERSION BELOW
console.log('Cars for sale');
for (i = 0; i <+ totalCarsforsale; i++){
    console.log( i+1, carsForsale[i]);
}


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
