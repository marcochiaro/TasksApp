import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4} from 'uuid';

const FormularioTareas = ({tasks, setTasks}) => {

    const [valueInput, setValueInput] = useState('');

    const handleInput = (e) => {
        setValueInput(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setTasks(
            [
            ...tasks,
            {
                id: uuidv4(),
                textTask: valueInput,
            }

         ]
         )

        setValueInput('');
    }


    return ( 
        <>
            <form className="form-tasks" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-tasks__input"
                    placeholder="Write a new task to add."
                    value={valueInput}
                    onChange={(e) => handleInput(e)}
                />
                <button className="form-tasks__btn" type="submit">
                    <FontAwesomeIcon className="form-tasks__icon-btn" icon={faPlusSquare}/>
                </button>
            </form>


        </>
     );
}
 
export default FormularioTareas;