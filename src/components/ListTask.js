import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Task from "./Task";

const ListTask = ({tasks, setTasks, showCompletedTasks}) => {

    const toggleCompleted = (id) => { 
        console.log('Manipulating task with the id: ', id)

        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task;
            })   
        )
    }

    const editingTask = (id, newTask) => { 
        console.log('Manipulating task with the id: ', id)

        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return {...task, textTask: newTask}
                }
                return task;
            })    
        )
    }

    const deleteTask = (id) => { 
        console.log('Manipulating task with the id: ', id)

        setTasks(
            tasks.filter((task) => {
                if (task.id !== id) {
                    return task
                }
                return;
            })    
        )
    }


    return ( 

       <ul className = 'list-tasks'>
           { tasks.length > 0 ? 
                tasks.map((task) => {

                if (showCompletedTasks){
                   return <Task 
                            key={task.id} 
                            task={task} 
                            toggleCompleted = {toggleCompleted} 
                            editingTask = {editingTask}
                            deleteTask = {deleteTask}
                            />
                 } 
                 else if (!task.completed) { 
                   return <Task 
                            key={task.id} 
                            task={task} 
                            toggleCompleted = {toggleCompleted} 
                            editingTask = {editingTask}
                            deleteTask = {deleteTask}
                            />
                 }
                 return;
                })
                
                
                : 
                <div className = 'list-tasks__message'>~ No added tasks. ~</div>}
        </ul> 
     );
}
 
export default ListTask;