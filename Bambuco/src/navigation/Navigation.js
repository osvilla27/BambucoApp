import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import TabNavigator from './TabNavigation';

import { Provider } from "react-redux";
import { store } from "../store";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SignUp" 
        component={SignUpScreen} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
      />
      <Stack.Screen
        name="Root"
        component={TabNavigator}
      />
    </Stack.Navigator>
    </Provider>
  );
};

export default Navigation;
