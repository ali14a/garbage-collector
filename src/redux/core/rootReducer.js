import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import loginReducer from '../LoginComponent/LoginReducer'
import homeReducer from '../HomeComponent/HomeReducer'
const loginPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(loginPersistConfig, loginReducer);
let combinedReducer = combineReducers({
  login: persistedReducer,
  home: homeReducer
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    AsyncStorage.removeItem('persist:login')
    state = undefined
  }
  return combinedReducer(state, action)
}
export default rootReducer;