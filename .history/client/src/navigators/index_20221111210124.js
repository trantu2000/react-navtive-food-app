import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SplashScreen } from "../screens";
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigators;
