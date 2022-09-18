import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from 'redux';
// import rootReducer from './rootReducer';
import ModalReducer from './ModalReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const store = createStore(ModalReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
// const configstore = configureStore(rootReducers);

export default store;