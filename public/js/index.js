const abrirMenu = document.querySelector('.icon-menu')
const fecharMenu = document.querySelector('.icon-close')
const menu = document.querySelector('.menu-responsivo')

const abrirMenuSeg = document.querySelector('.titulo-segmento')
const menuSegmentos = document.querySelector('.menu-segmentos')

const abrirSegResp = document.querySelector('.segmento-resp')
const menuSegmentosResp = document.querySelector('.menu-segmentos-resp')

function menuMobile() {
    menu.style.display = 'flex'
    abrirMenu.style.display = 'none'
    fecharMenu.style.display = 'block'
}

function fecha() {
    menu.style.display = 'none'
    abrirMenu.style.display = 'block'
    fecharMenu.style.display = 'none'
}

abrirMenu.onclick = () => menuMobile()
fecharMenu.onclick = () => fecha()

function abrirSegmentos() {
    menuSegmentos.style.display = 'flex'
    abrirMenuSeg.innerHTML = 'Segmentos🔻'
}

function fechaSegmentos() {
    menuSegmentos.style.display = 'none'
    abrirMenuSeg.innerHTML = 'Segmentos🔺'
}

abrirMenuSeg.onclick = () => abrirSegmentos()
abrirMenuSeg.onmouseover = () => abrirSegmentos()
abrirMenuSeg.onclick = () => fechaSegmentos()

function abrirSegmentosResp() {
    menuSegmentosResp.style.display = 'block'
    abrirSegResp.innerHTML = 'Segmentos🔻'
}

function fecharSegmentosResp() {
    menuSegmentosResp.style.display = 'none'
    abrirSegResp.innerHTML = 'Segmentos🔺'
}

abrirSegResp.onclick = () => abrirSegmentosResp()
