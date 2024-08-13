import { useState } from "react";

const initalTodoList = [
    {id:0, taskTitle:"Learn react",seen:true},
    {id:1, taskTitle:"Learn mySql",seen:false},
    {id:2, taskTitle:"Learn Express", seen:false}
]

let nextId = 3;

export default function TodoList(){

    const [tasks,setTask] = useState(initalTodoList);
    const [newTask, setNewTask] = useState('');

    function handleToggleClick(taskID,nextSeen){
        setTask(tasks.map(task =>{
            if(task.id === taskID){
                return {...task,seen:nextSeen};
            }
            else{
                return task;
            }
        }))
    }


    function handleNewTask(){
        setTask([
            ...tasks,
            {id:nextId++,taskTitle:newTask}
        ])
    }
    return(
        <>
            <h1>TodoList</h1>
            <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)} />
            <button onClick={handleNewTask}>Add task</button>
            <TaskList 
                tasks={tasks}
                onToggle={handleToggleClick}
            />
        </>
    )

    function TaskList({tasks, onToggle}){
        return(
            <ul>
                {tasks.map((task)=>{
                    return(
                    <li key={task.id}>
                        <label>
                            <input type="checkbox" 
                                    checked = {task.seen}
                                    onChange={e => 
                                        onToggle(task.id,e.target.checked)
                                    } />
                            {task.taskTitle}
                        </label>
                        <button onClick={()=>{
                            setTask(
                                tasks.filter(t =>
                                    t.id !== task.id
                                )
                            )
                        }}>Delete</button>
                    </li>)
                })}
            </ul>
        )
    }


    
}
