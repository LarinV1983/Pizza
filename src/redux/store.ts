import { createStore } from 'redux';
import  {  composeWithDevTools  }  from  'redux-devtools-extension';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'; 

import rootReducer from './reducers';

const store = createStore (rootReducer,
	composeWithDevTools ()
	);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
