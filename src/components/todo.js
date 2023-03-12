import createElements from "../createElements"


export default class Todo {
    constructor(title, details, dueDate, projectName) {
        this.title = title
        this.details = details
        this.dueDate = dueDate
        this.projectName = projectName
        this.underUpdate = false
    }
    createTodo() {
        const todo = createElements('div')
        todo.className = 'todo'
        const input = createElements('input')
        input.type = 'checkbox'
        input.name = 'todo'

        const p = createElements('p')
        p.textContent = this.title

        const right = createElements('div')
        right.className = 'right'
        const date = createElements('div')
        date.className = 'date'
        date.textContent = this.dueDate

        const options = createElements('div')
        options.className = 'options'
        const deleteBtn = createElements('i')
        deleteBtn.className = 'fa-solid fa-trash-can'
        deleteBtn.classList.add('delete')

        const editBtn = createElements('i')
        editBtn.className = 'fa-regular fa-pen-to-square'
        editBtn.classList.add('edit')

        options.appendChild(editBtn)
        options.appendChild(deleteBtn)

        right.appendChild(date)
        right.appendChild(options)
        todo.appendChild(input)
        todo.appendChild(p)

        const li = createElements('li')
        li.appendChild(todo)
        li.appendChild(right)

        return li
    }
}