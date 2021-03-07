import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, TableWrapper } from "react-native-table-component";

export default function RecordTable({ data }) {
  return (
    <View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "transparent" }}>
        <Row
          data={data.tableHead}
          flexArr={data.flexArr}
          style={styles.head}
          textStyle={[styles.text, styles.headText]}
        />
        {data.tableData.map((rowData, index) => (
          <TableWrapper>
            {rowData.map((cellData, cellIndex) => (
              <Row
                key={cellIndex}
                data={cellData}
                flexArr={data.flexArr}
                style={[
                  styles.row,
                  index % 2 && { backgroundColor: "#F7F6E7" },
                ]}
                textStyle={styles.text}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: "#808B97" },
  text: {
    margin: 6,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
});
