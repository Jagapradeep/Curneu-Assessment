import React from "react";
import { View } from "react-native";

import AppStyles from "./AppStyles";

function Screen({ children }) {
  return <View style={AppStyles.screen}>{children}</View>;
}

export default Screen;
