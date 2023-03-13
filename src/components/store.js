export default class Store {
    static getTodo() {
            return JSON.parse(localStorage.getItem('todo'))
    }
    static storeTodo(array) {
        localStorage.setItem('todo', JSON.stringify(array))
    }
}