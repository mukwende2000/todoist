import Form from "./components/form"
import Todo from "./components/todo"
import createElements from "./createElements"
const form = new Form()


const message = document.querySelector('.message')
const projects = document.querySelector('.projects')
const ul = document.querySelector('.todos ul')
export const projectsArray = ['Chores', 'Coding']
export const todos = []

export default function() {
    if(form.validate()) { 
        message.textContent = 'Please fill in all fields'
        setTimeout(() => {
            message.textContent = ''
        }, 2000);
        return
    }

    const todo = new Todo(form.getTitle(), form.getDetail(), form.getDate(), form.getProject())
    console.log(todo)
    todos.push(todo)
    ul.innerHTML = ''
    todos.forEach(todo => {
        const myTodo = todo.createTodo()
        ul.appendChild(myTodo)
    })
    const isAbsent = projectsArray.every(project => {
        return project !== todo.projectName
    })
    
    if(isAbsent) {
        const newProject = createElements('li')
        newProject.className = 'project'
        newProject.textContent = todo.projectName
        projectsArray.push(newProject.textContent)
        
        projects.appendChild(newProject)
    }
}