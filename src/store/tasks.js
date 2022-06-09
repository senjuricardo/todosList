const tasks =[
    {
        id: 1,
        title: 'task 01',
        isCompleted: false
    },
    {
        id: 2,
        title: 'task 02',
        isCompleted: true
    },
    {
        id: 3,
        title: 'task 03',
        isCompleted: false
    },
]

function getTasks(){
    return tasks
}

function setTasks(newTask){
    let task = tasks.find(currentTask => currentTask.id === newTask.id)
    task  = newTask
 
    const tasksChanged = new CustomEvent('tasksChanged')
    document.dispatchEvent(tasksChanged)
}

export {getTasks, setTasks}