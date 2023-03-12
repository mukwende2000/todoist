import createElements from "../createElements"
export default class ToDoListHeader {
    constructor() {
    }
    createHeader(target) {
        this.h2 = createElements('h2')
        this.h3 = createElements('h3')
        this.h2.textContent = target.textContent
        this.h3.textContent = 'Due Date'
        return {h2: this.h2, h3: this.h3}
    }
}