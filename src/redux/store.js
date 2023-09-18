import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const priorityOrder = {
  重要: 0,
  一般: 1,
  不重要: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = action.payload;
      const updatedTodo = {
        ...newTodo,
        priority: newTodo.priority || '一般', // Assign default priority if not selected
      };
      const updatedTodos = [...state.todos, updatedTodo];
      updatedTodos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

      return {
        ...state,
        todos: updatedTodos,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'MARK_DONE':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;