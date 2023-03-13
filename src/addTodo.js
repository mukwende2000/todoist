import Form from "./components/form"
import Todo from "./components/todo"
const form = new Form()


export const todos = []

export default function() {

    const todo = new Todo(form.getTitle(), form.getDetail(), form.getDate(), form.getProject())
    todos.push(todo)
}
