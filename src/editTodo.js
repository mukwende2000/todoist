import { todos } from "./addTodo"
const ul = document.querySelector('.todos ul')
const title = document.querySelector('.title-input')
const detail = document.querySelector('.details-input')
const date  = document.querySelector('.date-input')
const project = document.querySelector('.project-input')

function initializeEdit(todo) {
    const todosArray = [...ul.children]
    const currentTodo = todos[todosArray.indexOf(todo)]
    currentTodo.underUpdate = true
    title.value = currentTodo.title
    detail.value = currentTodo.details
    date.value = currentTodo.dueDate
    project.value = currentTodo.projectName
    title.focus()
}

function applyEdit() {
    todos.forEach(todo => {
        if(todo.underUpdate) {
            todo.title = title.value
            todo.details = detail.value
            todo.dueDate = date.value
            todo.projectName = project.value
            todo.underUpdate = false
        }

        ul.innerHTML = ''
        todos.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
    })
}

export {initializeEdit, applyEdit}