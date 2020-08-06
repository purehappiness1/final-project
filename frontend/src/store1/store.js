import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todo/todoSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
