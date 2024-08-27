import { useState } from "react"

export function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

function handleInputChange(event) {
    setNewTask(event.target.value);

}

function addTask() {
    if(newTask.trim() !== ""){
        setTasks(t => [...t,newTask])
    }
  

}

function deleteTask(index) {
    const updatedTask = tasks.filter((element,i) => i !== index) // =const updatedTask = tasks.filter((_,index))
    setTasks(updatedTask);
}

function moveTaskUp(index) {
    const updatedTask = [...tasks]
if (index > 0) {
   [updatedTask[index],updatedTask[index-1]]= [updatedTask[index-1],updatedTask[index]]

   setTasks(updatedTask);
}

}
function moveTaskDown(index) {
    const updatedTask = [...tasks]
    if (index < tasks.length-1){
        [updatedTask[index],updatedTask[index+1]]= [updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask);
    }
     }
    

    return <>
    <h1>To-Do-List</h1>
    <div>
        <input type="text" placeholder="Enter task" value={newTask} onChange={handleInputChange} />
        <button className="add-button" onClick={addTask}>Add</button>
    </div>
    <ul>
        {
            tasks.map((task,index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete" onClick={ () => deleteTask(index)}>Delete</button> 
                <button className="move-up" onClick={ () => moveTaskUp(index)}>Move Up</button>
                <button className="move-down" onClick={ () => moveTaskDown(index)}>Move Down</button>
            </li>
            )
        }
    </ul>
    
    
    </>


}