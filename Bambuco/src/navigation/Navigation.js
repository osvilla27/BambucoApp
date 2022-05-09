import React, { useContext } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import TabNavigator from './TabNavigation';

import { Context, Provider } from '../context/globalContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const globalContext = useContext(Context);
  const {isLoggedIn, token} = globalContext;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {(!isLoggedIn || !token)?
        <>
          <Stack.Screen
            name="SignUp" 
            component={SignUpScreen} 
          />
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
          />
        </>
      :
      <Stack.Screen
        name="Root"
        component={TabNavigator}
      />
      } 
    </Stack.Navigator>
  );
};

export default Navigation;
