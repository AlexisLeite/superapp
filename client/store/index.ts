import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import alertSlice from './alertSlice';
import counterSlice from './counterSlice';
import peopleSlice from './peopleSlice';

const store = configureStore({
  reducer: {
    alertSlice,
    counterSlice,
    peopleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
