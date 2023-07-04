// ------------Asynchronic-----------
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

// ------------Callback-----------
function greet(name, smth) {
    console.log("Hello, " + name + "!");
    smth();
  }
  
  const sayGoodbye = () =>{
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);

 // ------------Callback_Hell----------- 