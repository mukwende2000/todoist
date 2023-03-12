import './style.css'
import img1 from './images/logo.webp'
import ToDoListHeader from './components/todoListHeader'
import Form from './components/form'

const logoImg = document.querySelector('.logo-img')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.fa-bars')
const links = document.querySelectorAll('.link')
const header = document.querySelector('.header')
const popupBtn = document.querySelector('.popupBtn')
const li = document.querySelector('.task')
const todos = []

logoImg.src = img1
const toDoListHeader = new ToDoListHeader()
const form = new Form()

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})
links.forEach(link => {
    link.addEventListener('click', (e) => {
        const a = toDoListHeader.createHeader(e.target)
        header.innerHTML = ''
        header.appendChild(a.h2)
        header.appendChild(a.h3)       
    } )
})
popupBtn.addEventListener('click', form.hide)
