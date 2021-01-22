const abrirMenu = document.querySelector('.icon-menu')
const fecharMenu = document.querySelector('.icon-close')
const menu = document.querySelector('.cabecalho-itens-mobile')

const menuMobile = () => {
    menu.style.display = 'flex'
    abrirMenu.style.display = 'none'
    fecharMenu.style.display = 'block'
}

const fecha = () => {
    menu.style.display = 'none'
    abrirMenu.style.display = 'block'
    fecharMenu.style.display = 'none'
}

abrirMenu.onclick = () => menuMobile()
fecharMenu.onclick = () => fecha()