import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './rootReducer';
import { persistStore } from 'redux-persist';
import { axiosInstance } from './../core/axiosInstance';
const middleware = applyMiddleware(thunk, promiseMiddleware, logger);

export const store = createStore(reducer, middleware);
export const persistor = persistStore(store, null, () => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState()['login']['token']}`
});
