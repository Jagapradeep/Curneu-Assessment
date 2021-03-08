import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../config/forms";
import recordsApi from "../api/records";
import Screen from "../config/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  age: Yup.number().required().min(1).max(70).label("Age"),
  salary: Yup.number().required().min(1).max(10000000).label("Salary"),
});

const handleSubmit = async (record, { resetForm }) => {
  const result = await recordsApi.addRecord(record);
  if (!result.ok) return alert("Could not save the record");
  alert("Success");
  resetForm();
};

function RecordEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          name: "",
          age: "",
          salary: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="name" placeholder="Name" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="age"
          placeholder="Age"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="salary"
          placeholder="Salary"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RecordEditScreen;
