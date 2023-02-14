import React from 'react';
import Welcome from './Components/Screens/Welcome/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetCredentials from './Components/Screens/Auth/GetCredentials';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {View, Text} from 'react-native';

const isInternetConnected = () => true;

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      {isInternetConnected() ? (
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
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Internet Connection Required</Text>
        </View>
      )}
      <Toast />
    </>
  );
};

export default App;
