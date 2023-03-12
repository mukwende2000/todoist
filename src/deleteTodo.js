import { todos } from './addTodo'
const ul = document.querySelector('.todos ul')
export default function deleteTodo(todo) {
    const todosArray = [...ul.children]
    todos.splice(todosArray.indexOf(todo), 1)
    console.log(todo)
    console.log(todos)
    ul.innerHTML = ''
    todos.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
}