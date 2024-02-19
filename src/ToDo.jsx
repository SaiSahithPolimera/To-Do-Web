import React, {useState} from 'react';
import tasksImage from 'D:/PersonalProjects/React/mytodolist/src/assets/download.png';
import heart from 'D:/PersonalProjects/React/mytodolist/src/assets/images.jpeg';
import tick from 'D:/PersonalProjects/React/mytodolist/src/assets/tick-mark.webp';


function ToDo() {
    const[tasks, setTask] = useState([]);
    const[newTask, setNewTask] = useState("");

    function handleTask(event) {
        setNewTask(event.target.value);
    }

	function deleteTask(index) {
		const updatedTasks = tasks.filter((_, i) => index !== i);
		setTask(updatedTasks);
	}
	
    function addTask() {
        if(newTask.trim() != "") {
            setTask(n => [...n, newTask]);
            setNewTask("");
        }
    }

	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
			setTask(updatedTasks);
		}
	}

	function moveTaskDown(index) {
		if(index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
			setTask(updatedTasks);
		}
	}


    return(
        <>
        <div className="my-to-do">
            <h1> To Do ✔️</h1>
            <h2> A Place to Organize all your tasks</h2>
            <p id='message' >get tasks done with To Do</p>
            <img src={tasksImage} alt="My Image"></img>
            <img src={tick} className='tick-image'></img> 
            <img src={heart}></img>
        </div>
        <div className="to-do-block">
            <h1> Enter tasks to continue </h1>
            <p id='message-to-do' >get tasks done with To Do</p>
            <input className='get-tasks' onChange={handleTask}/>
            <button className='add-task' onClick={addTask}>Add task</button>
                <ol>
                <div className='list-items'>
                    {tasks.map((task, index) => <li>{task}
                    <button className='delete-task' onClick={() => deleteTask(index)}>delete task</button>
                    <button className='move-up'onClick={() => (moveTaskUp(index))}>move up</button>
                <button className='move-down' onClick={() => (moveTaskDown(index))}>move down</button></li>)}
            </div>
                </ol>
                </div>
        </>
    );
}

export default ToDo;