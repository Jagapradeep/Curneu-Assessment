import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../config/Screen";
import recordsApi from "../api/records";
import ListItem from "../config/ListItem";
import ListItemSeparator from "../config/ListItemSeparator";
import ListItemDeleteAction from "../config/ListItemDeleteAction";
import AppText from "../config/AppText";
import AppButton from "../config/AppButton";

function RecordsScreen({ navigation }) {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    const response = await recordsApi.getRecords();
    if (!response.ok) return setError(true);

    setError(false);
    setRecords(response.data.data);
  };

  const handleOnPress = (item) => {
    console.log(item);
    navigation.navigate("Create");
  };

  const handleDelete = (record) => {
    setMessages(records.filter((r) => r.id !== record.id));
  };

  return (
    <Screen>
      {error && (
        <View style={styles.error}>
          <AppText>Couldn't retrieve the records.</AppText>
          <AppButton title="Retry" Width="50%" onPress={loadRecords} />
        </View>
      )}
      {!error && (
        <FlatList
          data={records}
          keyExtractor={(record) => record.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              name={item.employee_name}
              age={item.employee_age}
              salary={item.employee_salary}
              image={require("../assets/mosh.jpg")}
              onPress={() => handleOnPress(item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={loadRecords}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  error: {
    alignItems: "center",
  },
});

export default RecordsScreen;
