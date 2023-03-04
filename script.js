
welcomeEl = document.getElementById ("welcome-el")
name = " Muhammad Afaq!"
greeting = "Welcome back "
welcomeEl.innerText = greeting + name  


let afaq = document.getElementById("click")
let count = 0;
function increment() {
    count = count + 1;
    afaq.innerText = count
}


saveEl = document.getElementById("save-el")
function save () {
    let anyVariable = count + " - "
    saveEl.textContent +=  anyVariable
    afaq.innerText = 0
    count = 0
}