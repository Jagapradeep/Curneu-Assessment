import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import AppText from "../config/AppText";
import AppButton from "../config/AppButton";
import colors from "../config/colors";

function HomeScreen({ navigation }) {
  const handleOnPress = () => {
    navigation.navigate("TabNavigator");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <AppText style={styles.brand}>JUST GET IT</AppText>
      <AppButton title="Start" Width="50%" onPress={() => handleOnPress()} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    position: "absolute",
    top: 100,
    fontSize: 30,
    fontWeight: "bold",
    color: colors.dark,
  },
});
export default HomeScreen;
