import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Colors from "../constants/Colors";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" 
      backgroundColor={Colors.DEFAULT_GREEN}/>
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
