import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const WelcomeCard = ({ title, content, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
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
  image:{
    
  },
  titleText:{

  },
  contentText:{

  }
});
