let ctrlMenu = document.querySelector('#ctrlMenu')
let cabecalho_nav = document.querySelector('.cabecalho_nav')

ctrlMenu.addEventListener('click', (evt) => {
    cabecalho_nav.classList.toggle('dnone')
})