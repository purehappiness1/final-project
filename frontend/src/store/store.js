import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

const todos = [
  // {id: 1, todo: 'Feed the cat', status: false},
  // {id: 2, todo: 'Wash the dishes', status: false},
  // {id: 3, todo: 'Read a book', status: false}
]

const initialState = {
  todos: todos,
  isAuth: false
}

export default createStore(reducer, initialState, composeEnhancers)
