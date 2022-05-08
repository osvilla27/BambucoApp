import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import TabNavigator from './TabNavigation';
import { AuthProvider } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
    
  );
};

export default Navigation;
