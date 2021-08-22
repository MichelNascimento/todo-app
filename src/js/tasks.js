export default class Tasks {
  constructor(inputTask, completed) {
    this.inputTask = document.querySelector(inputTask)
    this.completed = document.querySelector(completed)

    this.createNewTask = this.createNewTask.bind(this)
  }

  createNewTask(event) {
    if (event.keyCode === 13) {
      let taskDescription = this.inputTask.value
      let isCompleted = this.completed.checked

      console.log(taskDescription, isCompleted)
    }
  }

  addEvents() {
    this.inputTask.addEventListener('keyup', this.createNewTask)
  }

  init() {
    this.addEvents();

    return this
  }
}