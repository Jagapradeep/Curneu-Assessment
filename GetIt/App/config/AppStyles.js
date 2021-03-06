import { Platform, StatusBar } from "react-native";

export default {
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
};
