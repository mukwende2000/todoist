import ToDoListHeader from "./todoListHeader"
import { projectsArray, todos } from "../addTodo"
const todoListHeader = new ToDoListHeader()
const header = document.querySelector('.header')
const ul = document.querySelector('.todos ul')

export default function(e) {
    const myHeader = todoListHeader.createHeader(e.target)
    header.innerHTML = ''
    header.appendChild(myHeader.h2)
    header.appendChild(myHeader.h3)       

    if(projectsArray.includes(e.target.textContent)) {
        const newArray = todos.filter(todo => {
            return todo.projectName === e.target.textContent
        })
        console.log(newArray)
        console.log(todos)
        ul.innerHTML = ''
        newArray.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
        
    } else if(e.target.textContent === 'Home') {
        ul.innerHTML = ''
        todos.forEach(todo => {
            const myTodo = todo.createTodo()
            console.log(todo.dueDate.slice(8) == new Date().getDate())
            ul.appendChild(myTodo)
        })
    } else if(e.target.textContent = 'Today') {
        
        const newArray = todos.filter(todo => {
            return todo.dueDate.slice(8) == new Date().getDate()
        })
        ul.innerHTML = ''
        newArray.forEach(todo => {
            const myTodo = todo.createTodo()
            ul.appendChild(myTodo)
        })
    }
}