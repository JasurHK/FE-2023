let base = {
    type : ['gruby' , 'chenky' , 'lavash'],
    meat : [ 'beaf' , 'chicken' , 'mix'],
    vagetables :[ 'ludova' , 'cukamber' , 'tomato' , 'egeplant' , 'cabbege'],
    sos : [ 'garlic' , 'spicy' , 'mix' ],
    take_away : [true , false],
 
};

let is_there_custumar = false ;

const order = (time , work)=>{

    return new Promise ( ( resolve , reject)=>{
        if ( is_there_custumar) {
            setTimeout( ()=>{
                resolve( work());
            },time);
        }
        else {
            reject( console.log('no custumer'));
        }
    } );

};
order(1000, ()=>console.log(`Costumer wants ${base.type[2]}`))

.then ( ()=>{
    return order(0, ()=>console.log(`Ergun started making`));
})

.then ( ()=>{
    return order(2000, ()=>console.log(`I cuttes the ${base.meat[0]}`))
})

.then ( ()=>{
    return order(1000, ()=>console.log(`Ergun took the meat and added ${base.sos[0]} sos`))
})

.then ( ()=>{
    return order(1000, ()=>console.log(`then added only ${base.vagetables[4]}`))
})

.then ( ()=>{
    return order(2000, ()=>console.log('kebab ready!'))
})

.catch ( ()=>console.log('no work') )

.finally ( ()=>console.log('we finished work') );

// let is_cloudy = false ;

// const is_raining = (time , procses)=>{
//     return new Promise ( (resoleve , reject)=>{
//         if (is_cloudy){
//             setTimeout( ()=>{
//                 resoleve(procses());
//             },time);
//         }
//         else {
//             reject( console.log('it is sunny!'));
//         }
//     });

// };
// is_raining(2000, ()=>{console.log('it is cloudy , it is gonna rain')})

// .then( ()=>{
//     return is_raining(2000, ()=>{console.log('Oh it is raing')})
// })

// .then( ()=>{
//     return is_raining(1000, ()=>{console.log('fu#k i forgot my umbralla')})
// })

// .catch( ()=>{
//     console.log('it is not gonna rain today so we can go to beach')
// })

// .finally( ()=>{
//     return is_raining( 2000, ()=>{console.log('lets go!')})
// });




let is_cloudy = true;

const is_raining = (time, process) => {
  return new Promise((resolve, reject) => {
    if (is_cloudy) {
      setTimeout(() => {
        resolve(process());
      }, time);
    } 
    else {
      reject(console.log('It is sunny!'));
    }
  });
};

is_raining(2000, () => {
  console.log('It is cloudy, it is gonna rain');
})
  .then(() => {
    return is_raining(2000, () => {
      console.log('Oh, it is raining');
    });
  })
  .then(() => {
    return is_raining(1000, () => {
      console.log('Oops, I forgot my umbrella');
    });
  })
  .catch(() => {
    console.log('It is not gonna rain today, so we can go to the beach');
  })
  .finally(() => {
    console.log('Let\'s go!');
  });
