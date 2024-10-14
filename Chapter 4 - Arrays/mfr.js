let a = [1,2,3,4,45,52,12,47,93,63,68,57,84,37,91]
// let b = []

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     b.push(element**2)

// }

// let b = a.map((e)=>{
//     return e**2
// })


// console.log(b)

// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(a.filter(greaterThanSeven))

const red = (a,b)=>{
    return a+b
}
console.log(a.reduce(red))