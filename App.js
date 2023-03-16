/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import NavigationRoute from './src/routes/Routes';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/core/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { COLORS } from './src/utils/styles/theme';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.PRIMARY}
        />
        <NavigationRoute />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PersistGate>
    </Provider>
  );
};


export default App;
