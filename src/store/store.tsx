
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Khai báo RootState
export default store;
