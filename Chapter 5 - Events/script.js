let btn = document.getElementById("btn")

btn.addEventListener("dblclick", () =>{
    alert("I was clicked")
})

btn.addEventListener("click", () =>{
    document.querySelector(".box").innerHTML = "<b> You are clicked</b>"
})

document.addEventListener("contextmenu", () =>{
    document.querySelector(".box").innerHTML = "<b> Don't click on Right click </b>"
})

document.addEventListener("keydown", () =>{
    alert("Why are you doing this?")
})