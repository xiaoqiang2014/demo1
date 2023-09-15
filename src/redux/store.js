import { createStore } from 'redux';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = action.payload;
      const updatedTodos = [...state.todos, newTodo];
      updatedTodos.sort((a, b) =>  a.priority -b.priority );

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