export default class Form {
    constructor() {
        this.title = document.querySelector('.title-input')
        this.detail = document.querySelector('.details-input')
        this.date  = document.querySelector('.date-input')
        this.project = document.querySelector('.project-input')
    }
    show() {
        this.wrapper = document.querySelector('.wrapper')
        // this.wrapper = document.querySelector('.wrapper')
        this.wrapper.style.display = 'block'
    }
    hide() {
        this.wrapper = document.querySelector('.wrapper')
        this.wrapper.style.display = 'none'
    }
    getTitle() {
        return this.title.value
    }
    getDetail() {
        return this.detail.value
    }
    getDate() {
        return this.date.value
    }
    getProject() {
        return this.project.value
    }
    validate() {
        this.inputs = [this.title, this.detail, this.date, this.project]
        this.isValid = this.inputs.some(child => {
            return !child.value
        })
        return this.isValid
    }

}