//  Primitive
//call by value:memory ka ref ni dia jata original data copy kr k dia jata ha us mn jo b changes krty hain wo copy mn krty hain 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/* const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); */

// const bigNumber = 3456543576654356754n //bigint



// Reference (Non primitive)//return type obj
//memory mn in ka refrence ap ko directly allocate kia ja skta ha ... jo b change ho ga original value mn ho ga
// Array, Objects, Functions

/* const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); */

// https://262.ecma-international.org/5.1/#sec-11.4.3

////Memories
//2 types of memory .. stack(premitive data type) and heap(non-premitive data type)
//original value will not change
let myName = "anosha";
let newName =myName;
myName = "Sohail"
console.log(newName)
//original value will change
let myObj = {
    name:'anosha',
    email:"abc@gmail.com"
}
let myObj2 = myObj;
myObj2.email = "ccc#gmail.com";
console.log(myObj.email);//ccc#gmail.com
console.log(myObj2.email);//ccc#gmail.com
