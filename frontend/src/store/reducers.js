
import actions from "./types";
import { appointments } from "../components/Dashboard/demo-data/appointments";

const initData = {
  todos: {
    'task-1': { id: 'task-1', content: 'Buy some apples', title: 'mvsv f' },
    'task-2': { id: 'task-2', content: 'Buy some bread' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
  },
  columns: {
    'column-1': { id: 'column-1', title: 'To do', taskId: ['task-1', 'task-2', 'task-3'] }
  },
  column0order: ['column-1'],
  firstName: '',
  lastName: '',
  isAuth: false,
  chartData: {
    labels: [
      'Подписан договор',
      'Переговоры',
      'Первичный контакт',
      'Принимают решение',
      'Согласование договора',
      'Назначена встреча',
      'Сделка не состоялась',
      'Другое'
    ],
    datasets: [{
      data: [67, 26, 12, 7 , 11, 10, 7, 5],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#23917d',
      '#35db45',
      '#ba1634',
      '#2f5e5b',
      '#677cc7',
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#23917d',
      '#35db45',
      '#ba1634',
      '#2f5e5b',
      '#677cc7',
      ]
    }]
  },
  appointments: appointments,
}

export const reducers = (state = initData, action) => {
  console.log('initData', initData);
  switch (action.type) {
    case actions.ADD_TODO:
      console.log('action.value', action.value);
      // const tasks = {
      //   todos: {'task': {id: Math.random(), content: action.value}}};
      console.log('satate', state);
      return { ...state, todos: { ...state.todos, id: Math.random(), content: action.value } };

    case actions.ADD_NAME:
      return { ...state, firstName: action.firstName, lastName: action.lastName, isAuth: true };

    case actions.LOGOUT:
      return { state, isAuth: false };
    
      case actions.ADD_DEAL: 
      // if (deal.status === action.status) {
      // deal.total += 1 }
      const index = state.chartData.labels.indexOf(action.status);

      const deals = state.chartData.datasets[0].data[index] += 1
      const x = state.chartData.datasets[0].data
      return { ...state, x: deals}

    default:
      return state;
  }
};
