// // ------------Asynchronic-----------
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("3");

// // ------------Callback-----------
// function greet(name, smth) {
//     console.log("Hello, " + name + "!");
//     smth();
// }
  
// const sayGoodbye = () =>{
//     console.log("Goodbye!");
// }
  
// greet("Alice", sayGoodbye);
 
// const sayHello = ( name , smth) => {
//     console.log(`hello ${name}!`);
//     smth();
// };
// const sayHi = ()=> {
//     console.log('hi!');
// };
// sayHello('john', sayHi);

let base = {
   type : ['gruby' , 'chenky' , 'lavash'],
   meat : [ 'beaf' , 'chicken' , 'mix'],
   vagetables :[ 'ludova' , 'cukamber' , 'tomato' , 'egeplant' , 'cabbege'],
   sos : [ 'garlic' , 'spicy' , 'mix' ],
   take_away : [true , false],

};

const order =(type, call_kitchen) =>{
   setTimeout( ()=>{
      console.log(`Costumer wants ${base.type[type]}`)

      setTimeout( ()=>{
         console.log('Same: yalla habibi! :)');

         setTimeout( ()=>{
            console.log('Same: faster yaa man');

         },2500);

      },2000);

      call_kitchen();
   },1000)
   
};

// ----------Callback_hell---------

const kitchen =() =>{
   setTimeout( ()=>{
      console.log('Ergun started making');

      setTimeout( ()=>{
         console.log('I cuttes the meat');

         setTimeout( ()=>{
            console.log(`Ergun took the meat and added ${base.sos[0]} sos`);

            setTimeout( ()=>{
               console.log(`then added only ${base.vagetables[4]}`);

               setTimeout( ()=>{
                  console.log('kebab ready!');
               },2000);

            },1000);

         },1500);

      },1000);

   },500);
};
order(1 , kitchen);

// and this is called callback hell !

 