import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Tela01 from './Telas/Tela01';
import Tela02 from './Telas/Tela02';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
        name='Tela Login 01'
        component={Tela01}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name='Tela Login 02'
        component={Tela02}
        options={{
          headerShown: false,
        }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>

  );
}
