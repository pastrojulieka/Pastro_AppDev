import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AuthNavigator from './AuthNav';
import MainNavigator from './MainNav';

const Stack = createStackNavigator();

export default () => {

  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  useEffect(() => {
    if (Platform.OS === 'android'){
      StatusBar.setBackgroundColor(isDarkMode ? '#000000' : '#ffffff');
    }

    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
  }, [isDarkMode]);

  const { data } = useSelector(state => state.authentication || {data: null, isLoading: false});

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {data === null ? (
          // User is not logged in
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          // User is logged in - MainNavigation contains the Bottom Tabs
          <Stack.Screen name="App" component={MainNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};