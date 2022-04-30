import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from '../screens/SignUpScreen';
import TabNavigator from './TabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
      <Stack.Screen
        name="Root"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
