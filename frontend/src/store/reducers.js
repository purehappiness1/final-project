import { ADD_TODO, DONE_TODO, DELETE_TODO, DELETE_ALL, WRITE_TODOS, GET_TODO, SEND_UPDATE } from './types';

export default function reducers(state, action) {

  switch (action.type) {
  case ADD_TODO:
  const newTodos = state.todos.concat(action.payload)
  return { ...state, todos: newTodos }
  
  case DONE_TODO:
    const doneTodos = state.todos.map(todo => {
      if (todo._id === action.payload) todo.status = !todo.status;
      return todo
    })
    return { ...state, todos: doneTodos}

  case DELETE_TODO:
    const deleteTodo = state.todos.filter(todo => {
      return todo._id !== action.payload }) 
    return { ...state, todos: deleteTodo }
  
  case DELETE_ALL:
    const deleteAll = []
    return { ...state, todos: deleteAll};
  
  case WRITE_TODOS:
    return { ...state, todos: action.payload}

  case GET_TODO: 
    const allTodos = state.todos;
    const someTodos = allTodos.map((todo) => {
      if (todo._id === action.payload) todo.edit = true;
      return todo
    })
    return { ...state, todos: someTodos}
  
  case SEND_UPDATE:
    const editTodos = state.todos.map((todo) => {
      if (todo._id === action.payload._id) todo = action.payload;
      return todo
    })
    return { ...state, todos: editTodos}
    
    default:
      return state
  }
}
