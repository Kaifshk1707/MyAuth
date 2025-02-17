import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyTabs from '../(tabs)/_layout';
import LoginScreen from '../(auth)/LoginScreen';
import SignUpScreen from '../(auth)/SignUpScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MainApp"
        component={MyTabs} // Nested Bottom Tabs after login
      />
    </Stack.Navigator>
  );
};

export default MyStack;
