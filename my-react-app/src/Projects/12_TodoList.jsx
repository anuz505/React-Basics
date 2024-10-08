import { useState } from "react";
import "../02_adding_intractivity/todolist.css"

const initalTodoList = [
    {id:0, taskTitle:"Learn react",seen:true},
    {id:1, taskTitle:"Learn mySql",seen:false},
    {id:2, taskTitle:"Learn Express", seen:false}
]

let nextId = 3;

export default function TodoList(){

    const [tasks,setTask] = useState(initalTodoList);
    const [newTask, setNewTask] = useState('');
    const [isEditing,setisEditing] = useState(false);
    const [editingTaskId, setEditingTaskId] = useState(null);

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
        setNewTask("");
    }
    return(
        <>
            <h1>TodoList</h1>
            <p className="quote">Get stuff done, one task at a time. 💪 What's on your plate today?</p>
            <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)} />
            <button onClick={handleNewTask}>Add task</button>
            <h4 className="priority">Priority</h4>
            <TaskList 
                tasks={tasks}
                onToggle={handleToggleClick}
            />
        </>
    )




    function TaskList({tasks, onToggle}){
        
    const goUp = (index)=> {
        if(index == 0){return}
        else{
        const newtaskfn =  [...tasks];
        [newtaskfn[index-1],newtaskfn[index]] = [newtaskfn[index],newtaskfn[index-1]];
        setTask(newtaskfn);}
    }
    const goDown = (index)=> {
        if(index == tasks.length -1){return}
        else{
            const newtaskfn = [...tasks];
            [newtaskfn[index + 1],newtaskfn[index]] = [newtaskfn[index],newtaskfn[index+1]];
            setTask(newtaskfn);
        }
    }
        return(
            <ul>
                {tasks.map((task,index)=>{
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
                        <button onClick={() => goUp(index)}>Up</button>
                        <button onClick={() => goDown(index)}>Down</button>
                        {isEditing && editingTaskId === task.id ? 
                        (<>
                            <input 
                                type="text"
                                value={task.taskTitle}
                                onChange={(e)=>{
                                    const updatedTasks = tasks.map(t=>
                                        t.id === task.id ? {...t , taskTitle : e.target.value} : t
                                    );
                                    setTask(updatedTasks)
                                }}
                            />
                            </>
                        ): (<></>)}
                         <button className="edit"
                            onClick={() => {
                                setisEditing(!isEditing);
                                setEditingTaskId(task.id);
                            }}
                        >
                            Edit
                        </button>
                        <button className="delete" onClick={()=>{
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
