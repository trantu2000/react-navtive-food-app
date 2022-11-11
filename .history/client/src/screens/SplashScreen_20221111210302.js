import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" 
      backgroundColor= "red"
      translucent/> */}
      <StatusBar style="auto" />
      
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
