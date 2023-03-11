import './style.css'
import img1 from './images/logo.webp'

const logoImg = document.querySelector('.logo-img')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.fa-bars')

logoImg.src = img1
burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})