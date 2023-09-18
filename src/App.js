import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/todolist';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim() !== '' && priority.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title,
        priority,
        done: false,
      };

      dispatch({ type: 'ADD_TODO', payload: newTodo });

      setTitle('');
      setPriority('');
    }
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option value="重要">重要 (Important)</option>
          <option value="一般">一般 (Normal)</option>
          <option value="不重要">不重要 (Not Important)</option>
        </select>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
