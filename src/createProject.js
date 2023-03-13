import createElements from "./createElements"

const projects = document.querySelector('.projects')
export const projectsArray = ['Chores', 'Coding']

export default function createProject(todo) {
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