import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WelcomeCard = ({title,content,image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.container}/>
      <Text style={styles.container}>WelcomeCard</Text>
      <Text style={styles.container}>WelcomeCard</Text>
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
