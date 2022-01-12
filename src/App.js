import './App.css';
import FormularioTareas from './components/formularioTareas';
import Header from './components/header';
import React, {useState, useEffect} from 'react';
import ListTask from './components/ListTask';

const App = () => {

  const savedTasks = localStorage.getItem('Tasks') ? (JSON.parse(localStorage.getItem('Tasks'))) : [];

  let savedCompletedTasks = '';
  if (localStorage.getItem('CompletedTasks') === null){

    savedCompletedTasks = true;

  } else { 
    savedCompletedTasks = localStorage.getItem('CompletedTasks') === 'true';
  }
  



  const [tasks, setTasks] = useState(savedTasks);

  useEffect( () => {localStorage.setItem('Tasks', JSON.stringify(tasks))}, [tasks])

  const [showCompletedTasks, setShowCompletedTasks] = useState(savedCompletedTasks);

  useEffect( () => {localStorage.setItem('CompletedTasks', showCompletedTasks.toString())}, [showCompletedTasks])

  console.log(tasks)


  return (
      <div className='contenedor'>
        <Header showCompletedTasks={showCompletedTasks} setShowCompletedTasks={setShowCompletedTasks} />
        <FormularioTareas tasks={tasks} setTasks={setTasks} />
        <ListTask 
          tasks={tasks} 
          setTasks = {setTasks} 
          showCompletedTasks = {showCompletedTasks}
        />
      </div>

  );
}

export default App;
