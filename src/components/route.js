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

        ul.innerHTML = ''
        newArray.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
        console.log(newArray)
    }
}