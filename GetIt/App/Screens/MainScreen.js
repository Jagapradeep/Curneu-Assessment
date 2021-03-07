import React from "react";
import { Alert } from "react-native";

import Screen from "./../config/Screen";
import RecordTable from "../config/Table";
import AppButton from "./../config/AppButton";
import getRecords from "./../api/records";

function MainScreen(props) {
  const element = (index) => (
    <AppButton title="Delete" width="50%" onPress={() => alertIndex(index)} />
  );

  const data = {
    tableHead: ["Name", "Salary", "Age", ""],
    flexArr: [3, 2, 1, 2],
    tableData: [
      {
        id: 1,
        name: "Jaga",
        salary: 50000,
        age: 21,
        button: element(0),
      },
      {
        id: 2,
        name: "Syed",
        salary: 60000,
        age: 22,
        button: element(1),
      },
      {
        id: 3,
        name: "Hariharan",
        salary: 70000,
        age: 23,
        button: element(2),
      },
      {
        id: 4,
        name: "Hariprasad",
        salary: 80000,
        age: 24,
        button: element(3),
      },
    ],
  };

  const alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
  };

  return (
    <Screen>
      <RecordTable data={data} />
    </Screen>
  );
}

export default MainScreen;
