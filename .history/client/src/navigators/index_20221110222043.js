import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Navigators = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash"/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigators;