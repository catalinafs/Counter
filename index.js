const cero = document.getElementById('cero')

let number = 0

cero.innerHTML = number

const decrease = document.getElementById('decrease')
decrease.onclick = functionDecrease;

function functionDecrease(){
    number -= 1
    cero.innerHTML = number
    cero.style.color = 'var(--3)' 
}

const reset = document.getElementById('reset')
reset.onclick = functionReset;

function functionReset(){
    number = 0
    cero.innerHTML = number
    cero.style.color = 'var(--4)'
}

const increase = document.getElementById('increase')
increase.onclick = functionIncrease;

function functionIncrease(){
    number += 1
    cero.innerHTML = number
    cero.style.color = 'var(--5)'
}