let abrir = document.getElementById('abrir')
let menu = document.getElementById('menu')
let overlay = document.getElementById('overlay-menu')
let inicio = document.getElementById('inicio')
let sobre = document.getElementById('sobre')
let portifolio = document.getElementById('portifolio')
let especialidade = document.getElementById('Especialidade')
let contato = document.getElementById('contato')

abrir.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})
inicio.addEventListener('click', () =>{
    menu.classList.remove('#inicio')
})
sobre.addEventListener('click', () =>{
    menu.classList.remove('#EU')
})
portifolio.addEventListener('click', () =>{
    menu.classList.remove('#portifolio')
})
Especialidade.addEventListener('click', () =>{
    menu.classList.remove('#Especialidade')
})

