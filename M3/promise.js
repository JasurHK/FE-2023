let base = {
    type : ['gruby' , 'chenky' , 'lavash'],
    meat : [ 'beaf' , 'chicken' , 'mix'],
    vagetables :[ 'ludova' , 'cukamber' , 'tomato' , 'egeplant' , 'cabbege'],
    sos : [ 'garlic' , 'spicy' , 'mix' ],
    take_away : [true , false],
 
};

let is_there_custumar = true ;

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

