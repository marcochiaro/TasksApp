import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Header = ({showCompletedTasks, setShowCompletedTasks}) => {


    const toggleCompleted = () => { 
       setShowCompletedTasks(!showCompletedTasks);
    }

    return ( 
        <header className="header">
            <h1 className="header__title">Tasks List</h1>
            {showCompletedTasks ?
                    <button 
                    className="header__button"
                    onClick={() => toggleCompleted()}
                    >
                        Don't show completed tasks
                        <FontAwesomeIcon icon={faEyeSlash} className="header__icon-button"/>
                    </button>
            :
                    <button 
                    className="header__button"
                    onClick={() => toggleCompleted()}
                    >
                        Show completed tasks
                        <FontAwesomeIcon icon={faEye} className="header__icon-button"/>
                    </button>
            }
                
        </header>
     );
}

 
export default Header;