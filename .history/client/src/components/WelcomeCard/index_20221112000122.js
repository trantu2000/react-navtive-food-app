import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WelcomeCard = () => {
  return (
    <View style={styles.container}>
      <Image />
      <Text>WelcomeCard</Text>
      <Text>WelcomeCard</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
