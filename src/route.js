import ToDoListHeader from "./components/todoListHeader"
import { todos } from "./addTodo"
import populateTodo from "./populateTodo"
const todoListHeader = new ToDoListHeader()
const header = document.querySelector('.header')
const ul = document.querySelector('.todos ul')

const projectsArray = ['Chores', 'Coding']
export default function(e) {
    const myHeader = todoListHeader.createHeader(e.target)
    header.innerHTML = ''
    header.appendChild(myHeader.h2)
    header.appendChild(myHeader.h3)       

    if(projectsArray.includes(e.target.textContent)) {
        const newArray = todos.filter(todo => {
            return todo.projectName === e.target.textContent
        })
        populateTodo(newArray)
        
    } else if(e.target.textContent === 'Home') {
        populateTodo(todos)
    } else if(e.target.textContent === 'Today') {
        const newArray = todos.filter(todo => {
            return todo.dueDate.slice(8) == new Date().getDate()
        })
       populateTodo(newArray)
    }
}