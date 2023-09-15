import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const handleMarkDone = (id, done) => {
    dispatch({ type: 'MARK_DONE', payload: { id, done } });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.title} - Priority: {todo.priority}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button
              onClick={() => handleMarkDone(todo.id, !todo.done)}
            >
              {todo.done ? 'Mark Undone' : 'Mark Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;