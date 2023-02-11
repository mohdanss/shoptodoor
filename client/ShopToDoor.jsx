import React from 'react';
import Welcome from './Components/Screens/Welcome/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetCredentials from './Components/Screens/Auth/GetCredentials';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
          animation="fade"
        />
        <Stack.Screen
          name="GetCredentials"
          component={GetCredentials}
          options={{headerShown: false}}
          animation="fade"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
