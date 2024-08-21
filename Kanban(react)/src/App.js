import { useState } from "react";
import Column from "./Column";
import CreateTaskForm from "./CreateTaskForm";

const taskStatuses = ["todo", "progress", "review", "done"];
const initialTasks = [
  { id: 1, title: "Task 1", status: "todo", priority: 1 },
  { id: 2, title: "Task 2", status: "progress", priority: 2 },
  { id: 3, title: "Task 3", status: "review", priority: 3 },
  { id: 4, title: "Task 4", status: "done", priority: 4 },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks); 

  const onStatusChange = (id, newStatus) =>{
    setTasks(tasks.map((task) =>{
      if (task.id === id){
        return{...task, status: newStatus}
      }
      return task;    
   }  
  ))
}

  const onCreateTask = (task) => {
    setTasks([...tasks, {...task, id: Math.random(), status: 'todo'}])
  }
  return(
  <div className="container">

    <CreateTaskForm onSubmit={onCreateTask}/>

    <div className='row'>
      {taskStatuses.map((status) => (
        <Column key = {status} status = {status} tasks = {tasks} statuses = {taskStatuses} onStatusChange = {onStatusChange}/>
              ))}
    </div>      
  </div>
  );
}

export default App;
