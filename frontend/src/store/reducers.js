
import actions from "./types";

const initData = {
  todos: {
    'task-1': {id: 'task-1', content: 'Buy some apples', title: 'mvsv f'},
    'task-2': {id: 'task-2', content: 'Buy some bread'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
  },
  columns: {
    'column-1': {id: 'column-1', title: 'To do', taskId: ['task-1', 'task-2', 'task-3']}
  },
  column0order: ['column-1']
}

export const reducers = (state = initData, action) => {
  console.log('initData', initData);
  switch (action.type) {
    case actions.ADD_TODO :
      console.log('action.value', action.value);
      // const tasks = {
      //   todos: {'task': {id: Math.random(), content: action.value}}};
      console.log('satate', state);
      return {...state , todos: {...state.todos, id: Math.random(), content: action.value}};
    default:
      return state;
  }
};
