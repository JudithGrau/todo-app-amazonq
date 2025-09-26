import { useState, useEffect } from 'react'
import './App.css'
import nube from './assets/nube.png'
import nube2 from './assets/nube2.png'
import destello from './assets/destello.png'
import destelloNube from './assets/destello_nube.png'
import capybara from './assets/capybara.png'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <div className="background-images">
        <img src={nube} alt="" className="bg-nube" />
        <img src={nube2} alt="" className="bg-nube2" />
        <img src={destello} alt="" className="bg-destello" />
        <img src={destelloNube} alt="" className="bg-destello-nube" />
      </div>
      <img src={capybara} alt="" className="capybara" />
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Agregar nueva tarea..."
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App