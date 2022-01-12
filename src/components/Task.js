import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';



const Task = ({task, toggleCompleted, editingTask, deleteTask}) => {

    const [taskEdit, setTaskEdit] = useState(false);
    const [newTask, setNewTask] = useState(task.textTask);
    

    const handleEdit = (e) => { 
        setNewTask(e.target.value)
    }
    
    const handleSubmitEdit = (e) => {
        
        e.preventDefault();
        editingTask(task.id, newTask);
        setTaskEdit(false);

    }

    return ( 
        <li key={task.id} className='list-tasks__task'>

            <FontAwesomeIcon 
                icon = {task.completed ? faCheckSquare : faSquare}
                className='list-tasks__icon list-tasks__icon-check'
                onClick = {() => toggleCompleted(task.id)}
            />


            <div className="list-tasks__text">
                {taskEdit ?
                    <form action="" className='form-edit-task' onSubmit={(e) => handleSubmitEdit(e)}>
                        <input 
                            type="text" 
                            className="form-edit-task__input"
                            value={newTask}
                            onChange={ (e) => handleEdit(e) }
                        />
                        <button type="submit" className="form-edit-task__btn">
                            Update
                        </button>

                    </form>
                : task.textTask
                }
            </div>

            <div className="list-tasks__container-buttons">

                <FontAwesomeIcon 
                    icon = {faEdit}
                    className='list-tasks__icon list-tasks__icon-action' 
                    onClick = {() => setTaskEdit(!taskEdit)}

                />

                <FontAwesomeIcon 
                    icon = {faTimes}
                    className='list-tasks__icon list-tasks__icon-action' 
                    onClick = {() => deleteTask(task.id)}
  
                />  

            </div>
            
        </li>
     );
}
 
export default Task;