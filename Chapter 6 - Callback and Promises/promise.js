console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Bhushan 1")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Bhushan 2")
        }, 1000);
    }
})

 
let p1 = Promise.all([prom1, prom2])
p1.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
// let p2 = Promise.allSettled([prom1, prom2])
// p2.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
// let p4 = Promise.any([prom1, prom2])
// p4.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
// let p5 = Promise.resolve([prom1, prom2])
// p5.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })
// let p6 = Promise.reject([prom1, prom2])
// p6.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// })

