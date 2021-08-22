export default class Tasks {
  constructor(inputTask, completed) {
    this.inputTask = document.querySelector(inputTask)
    this.completed = document.querySelector(completed)

    this.createNewTask = this.createNewTask.bind(this)
  }

  createNewTask(event) {
    if (event.keyCode === 13) {
      if (this.inputTask.value !== '') {
        let taskDescription = this.inputTask.value
        let isCompleted = this.completed.checked

        this.createTaskComponent(taskDescription, isCompleted)

        this.inputTask.value = ''
        this.completed.checked = false
      }
    }
  }

  createTaskComponent(taskDescription, isCompleted) {
    const taskContainer = document.querySelector('.tasks-container')

    const taskItem = document.createElement('li')
    const taskValue = document.createElement('span')
    const taskStatus = document.createElement('input')
    taskStatus.type = 'checkbox'

    taskItem.classList.add('task-item')

    taskValue.textContent = taskDescription
    taskStatus.checked = isCompleted

    taskContainer.appendChild(taskItem).appendChild(taskStatus)
    taskItem.appendChild(taskValue)
  }

  addEvents() {
    this.inputTask.addEventListener('keyup', this.createNewTask)
  }

  init() {
    this.addEvents();

    return this
  }
}