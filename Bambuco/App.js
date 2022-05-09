import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

import { Context, Provider } from './src/context/globalContext';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
    
  );
}

export default App;