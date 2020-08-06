const initData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Buy some apples'},
    'task-2': {id: 'task-2', content: 'Buy some bread'},
    'task-3': {id: 'task-3', content: 'Charge my phone'},
  },
  columns: {
    'column-1': {id: 'column-1', title: 'To do', taskId: ['task-1', 'task-2', 'task-3']}
  },
  column0order: ['column-1']
}

export default initData;
