import { StyleSheet, Text, View ,StatusBar,FlatList} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <View>
        <FlatList/>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
