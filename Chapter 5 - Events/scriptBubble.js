document.querySelector(".child").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("Child was clicked")
})
document.querySelector(".childContainer").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("Child Container was clicked")
})
document.querySelector(".container").addEventListener("click", (e) =>{
    alert("Container was clicked")
})

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// setInterval(() => {
//     document.querySelector(".child").style.background = getRandomColor();
// }, 500);

// let a = setTimeout(() => {
//     document.querySelector(".child").style.background = getRandomColor();
// }, 500);
