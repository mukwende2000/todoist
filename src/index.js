import './style.css'
import img1 from './images/logo.webp'
import ToDoListHeader from './components/todoListHeader'
import Form from './components/form'
import addTodo from './addTodo'
import deleteTodo from './deleteTodo'
import route from './route'
import { applyEdit,initializeEdit } from './editTodo'
import populateTodo from './populateTodo'
import { todos } from './addTodo'
import createProject from './createProject'
import Store from './components/store'

// window.addEventListener('DOMContentLoaded', () => {
//     if(localStorage.getItem('todo')) {
        
//         const storedTodos = Store.getTodo()
//         storedTodos.forEach(todo => {
//             todos.push(todo)
//         })
//         console.log(todos)
//         // populateTodo(todos)
//     }
// })
    

const logoImg = document.querySelector('.logo-img')
const menu = document.querySelector('.menu')
const burger = document.querySelector('.fa-bars')
const links = document.querySelectorAll('.link')
const popupBtn = document.querySelector('.popupBtn')

const addTaskBtn = document.querySelector('.addTaskBtn')
const cancelBtn = document.querySelector('.cancelBtn')
const editTaskBtn = document.querySelector('.editTaskBtn')

logoImg.src = img1
const toDoListHeader = new ToDoListHeader()
const form = new Form()

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})
links.forEach(link => {
    link.addEventListener('click', route)
})
addTaskBtn.addEventListener('click', () => {
    addTodo()
    populateTodo(todos)
    createProject(todos[todos.length - 1])
    Store.storeTodo(todos)
})

popupBtn.addEventListener('click', form.show)
cancelBtn.addEventListener('click', form.hide)
editTaskBtn.addEventListener('click', applyEdit)

document.addEventListener('click', (e) => {
    if(hasClass(e.target, 'delete')) {
        deleteTodo(e.target.parentElement.parentElement.parentElement)
    } else if(hasClass(e.target, 'edit')) {
        initializeEdit(e.target.parentElement.parentElement.parentElement)
    } else if(hasClass(e.target, 'project')) {
        route(e)
    }
})

function hasClass  (element, className) {
    return element.classList.contains(className)
} 