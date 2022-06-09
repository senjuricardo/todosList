import { setTasks } from "../store/tasks"

function render({task}){

    const li = document.createElement('li')

    const checkBox = document.createElement('input')
    checkBox.setAttribute("type", "checkbox")

    checkBox.addEventListener('click' ,function(e){
     task.isCompleted = !task.isCompleted

     setTasks(task)
    })

   if(task.isCompleted) checkBox.setAttribute("checked", "")
    li.append(checkBox)

    const span = document.createElement('span')
    span.textContent = task.title
    li.append(span)

    return li

}

export { render as renderTaskItem}