import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import {Colors} from '../constants/Colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" 
      backgroundColor= "red"
      translucent/> */}
      <StatusBar  
      backgroundColor="#0A8791"
      translucent
      />
      
      <Text></Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
