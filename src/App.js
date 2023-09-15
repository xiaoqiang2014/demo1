import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/todolist';

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
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList />
    </div>
  );
};

export default App;
