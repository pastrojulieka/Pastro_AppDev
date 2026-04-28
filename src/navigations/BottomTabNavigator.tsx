import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const BRAND_GREEN = '#52622E';
const BRAND_DARK = '#3A4520';
const GRAY_LIGHT = '#9CA3AF';

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
}

const BottomTabNavigator = () => {

  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: BRAND_GREEN,
        tabBarInactiveTintColor: GRAY_LIGHT,
        tabBarItemStyle: {
          paddingTop: 15,
          justifyContent: 'center',     
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: insets.bottom,
          left: 20,
          right: 20,
          height: 70, 
          backgroundColor: 'white', 
          borderTopWidth: 0,
          elevation: 50,
          shadowColor: BRAND_DARK,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          paddingBottom: 0, 
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? "home" : "home-outline"} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? "cart" : "cart-outline"} 
              color={color} 
              size={28} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? "person" : "person-outline"} 
              color={color} 
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;