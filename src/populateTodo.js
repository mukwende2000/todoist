const ul = document.querySelector('.todos ul')
export default function populateTodo(array) {
    ul.innerHTML = ''
    array.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
}