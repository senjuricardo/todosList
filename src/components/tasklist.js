import { getTasks } from "../store/tasks.js"
import { renderTaskItem } from "./taskitem.js"



function render() {


    const ul = document.createElement('ul')

    function reLiItems() {
        ul.innerHTML = ''
        const task = getTasks()
        task.forEach(task => {
            ul.append(renderTaskItem({ task }))
        })
    }
    reLiItems()
    document.addEventListener('tasksChanged', (e) => {
        reLiItems()
    })

    return ul
}

export { render as renderTaskList }