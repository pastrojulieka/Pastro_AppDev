/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/app/store';
import AppNavigation from './src/navigations';

const { store, persistor } = configureStore();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View className="flex-1">
            <AppNavigation />
          </View>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
