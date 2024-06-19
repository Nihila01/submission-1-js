function addTask(tasks, newTask) {
    tasks.push(newTask);
    return tasks;
}
let tasks = ["Buy groceries", "Clean the house"];
const newTask = "Pay bills";
tasks = addTask(tasks, newTask);
console.log(tasks); 
