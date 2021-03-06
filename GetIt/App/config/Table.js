import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Rows } from "react-native-table-component";

export default function Table({ data }) {
  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "white" }}>
        <Rows data={data} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "black" },
  head: { height: 40, backgroundColor: "#212529" },
  text: { margin: 6, color: "white" },
});
