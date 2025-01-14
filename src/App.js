import React, { useEffect, useState } from 'react'; 
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setTheme } from './redux/reducers/userPreferencesSlice';
import { toggleModal } from './redux/reducers/uiStateSlice';
import { updateTask } from './redux/actions/tasksActions';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage when state changes

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} />} />
        <Route path="/task/:id" element={<TaskDetails tasks={tasks} updateTask={updateTask} />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
