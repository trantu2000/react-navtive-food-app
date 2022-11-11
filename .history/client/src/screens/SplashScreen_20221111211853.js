import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Colors from "../constants/Colors";


const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" 
      backgroundColor= {Colors.DEFAULT_GREEN}
      translucent/>
      {/* <StatusBar  
      barStyle="light-content"
      backgroundColor="#0A8791"
      translucent
      /> */}
      
      {/* <Text>Tu</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_GREEN,
  },
});
