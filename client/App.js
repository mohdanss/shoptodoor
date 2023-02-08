import React from 'react';
import Welcome from './Components/Auth/Welcome';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
};

export default App;
