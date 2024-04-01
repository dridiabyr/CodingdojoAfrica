import React, { useState } from 'react';
import TodoList from './Components/Todolist.jsx'; // Importing TodoList component

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask !== '') {
      setTasks([...tasks, { text:newTask, completed:false }]);
      setNewTask('');
    }
  };

  const handleToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
  const handleDelete = (index) => {
    const updatedTasks=[...tasks]
    updatedTasks.splice(index,1)
    setTasks(updatedTasks);
  };

  // Rendering the Todo List
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList
        tasks={tasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
