import createElements from "../createElements"

export default class Todo {
    constructor(title, details, dueDate, projectName) {
        this.title = title
        this.details = details
        this.dueDate = dueDate
        this.projectName = projectName
    }
    createTodo() {
        const li = createElements('li')
        const todo = createElements('div')
        const input = createElements('input')
        input.type = 'checkbox'
        input.name = 'todo'

        const p = createElements('p')
        p.textContent = this.title

        const right = createElements('div')
        const date = createElements('div')
        date.textContent = this.dueDate

        const options = createElements('div')
        const deleteBtn = createElements('i')
        deleteBtn.className = 'fa-regular fa-pen-to-square'

        const editBtn = createElements('i')
        editBtn.className = 'fa-solid fa-trash-can'

        options.appendChild(editBtn)
        options.appendChild(deleteBtn)

        right.appendChild(date)
        right.appendChild(options)
        todo.appendChild(input)
        todo.appendChild(p)
        li.appendChild(todo)
        li.appendChild(right)
    }
}