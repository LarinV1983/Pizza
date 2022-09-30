import { createStore} from 'redux';
import  {  composeWithDevTools  }  from  'redux-devtools-extension';

import rootReducer from './reducers';

const store = createStore (rootReducer,
	composeWithDevTools ( 
    // applyMiddleware ( ... middleware ) 
		)
	);

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()