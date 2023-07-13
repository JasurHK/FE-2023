// function getWeather() {
//     return new Promise (function(resolve , reject ){
//         resolve ('Sunny')
//     })
// }
// const promise = getWeather()
// promise.then( (data)=>{
//     console.log(data)
// })
// (async () => {
//   await Promise.all([]).then((value) => {
//     console.log(value) // resolves with empty array []
//   }, (error) => {
//     console.log(error)
//   })
  
//   await Promise.all([1,2,Promise.resolve(3), Promise.resolve(4)]).then((value) => {
//     console.log(value) // all promises resolve so returns [1,2,3,4]
//   }, (error) => {
//     console.log(error)
//   })
  
//   await Promise.all([1,2,Promise.resolve(3), Promise.reject('error')]).then((value) => {
//     console.log(value)
//   }, (error) => {
//     console.log(error) // since 4th promise rejected, Promise.all also rejects with that value
//   })
// })();


function getWeather() {
  return new Promise(function(resolve, reject) {
    resolve('Sunny');
  });
}

(async () => {
  const data = await getWeather();
  console.log(data);
})();

(async () => {
  await Promise.all([])
    .then((value) => {
      console.log(value); // resolves with empty array []
    })
    .catch((error) => {
      console.log(error);
    });

  await Promise.all([1, 2, Promise.resolve(3), Promise.resolve(4)])
    .then((value) => {
      console.log(value); // all promises resolve so returns [1, 2, 3, 4]
    })
    .catch((error) => {
      console.log(error);
    });

  await Promise.all([1, 2, Promise.resolve(3), Promise.reject('error')])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error); // since 4th promise rejected, Promise.all also rejects with that value
    });
})();
