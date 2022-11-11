import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import Images from "../constants/Images";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} style={styles.image} resizeMode="contain"/>
      <Text style={styles.titleText}>Food App</Text>
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
  image: {
    height: 150,
    width: 150,
  },
  titleText:{
    fontSize:32,
    color:Colors.DEFAULT_WHITE,
    fontFamily:Fonts.POPPINS_BLACK
  }
});
