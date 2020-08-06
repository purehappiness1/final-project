import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

const todos = [
]

const initialState = {
  todos: todos,
  isAuth: false
}

export default createStore(reducer, initialState, composeEnhancers)
