var a = 5; //var is a global scoped variable
var b = 6;

var c = "Bhushan"
// var 45a = "hELLO"  #Not Allowed

// const x = 5 
// // const x = x+1  #Not Allowed because x is constant


let p = 6;  //let is a block scoped variable
let q = 5;
let r = "Bhushan";  

{   let p = 50;
    console.log ("This is a block:", p+q)
}
console.log ("This is a global env:", p+q)

// console.log(typeof a, typeof b, typeof c, typeof x)


// DATA TYPES IN JAVASCRIPT
let x = "Bhushan";  //String
let y = 55;  //Number
let z = 5.66; //Number
// const p = true; //Boolean
// let q = undefined //undefined
// let r = null //object

// console.log(x,y,z,p,q,r)
// console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// Objects in JAVASCRIPT

let info = {
    "first_name": "Bhushan",
    "last_name": "Chaudhari",
}

for (const key in info) {
        const element = info[key];
        console.log(key, element)
}

for (const i of "bhushan") {
    console.log(i)
}