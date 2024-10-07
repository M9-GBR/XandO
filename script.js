import Game from "./objects/game.js"

window.game = new Game()

let darkSwitch = document.getElementById('dark-switch'),
    img = document.querySelector('#dark-switch img'),
    pImg = document.querySelectorAll('.main img')

darkSwitch.addEventListener('click', () => {
    darkSwitch.classList.toggle('ds-dark')
    document.body.classList.toggle('body-dark')

    if (darkSwitch.classList.contains('ds-dark')) {
        img.src = './svgs/moon.svg'
    } else img.src = './svgs/sun.svg'

    pImg.forEach(elem => elem.classList.toggle('ds-dark'))
})