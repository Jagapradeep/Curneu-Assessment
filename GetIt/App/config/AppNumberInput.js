import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

function AppNumberInput({
  backgroundColor,
  width = "70%",
  color,
  editable = true,
  onChangeText,
  value,
  style,
}) {
  return (
    <View style={[styles.container, { backgroundColor }, { width }, style]}>
      <TextInput
        style={[styles.input, { color }]}
        editable={editable}
        keyboardType={"numeric"}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 50,
    padding: 15,
    marginVertical: 10,
  },
  input: {
    fontSize: 19,
    textAlign: "center",
  },
});

export default AppNumberInput;
