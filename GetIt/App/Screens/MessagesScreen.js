import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../config/Screen";
import recordsApi from "../api/records";
import ListItem from "../config/ListItem";
import ListItemSeparator from "../config/ListItemSeparator";
import ListItemDeleteAction from "../config/ListItemDeleteAction";
import AppText from "../config/AppText";
import AppButton from "../config/AppButton";

function MessagesScreen(props) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    const response = await recordsApi.getRecords();
    if (!response.ok) return setError(true);

    setError(false);
    setMessages(response.data.data);
  };

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      {error && (
        <>
          <AppText>Couldn't retrieve the records.</AppText>
          <AppButton title="Retry" onPress={loadRecords} />
        </>
      )}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            name={item.employee_name}
            age={item.employee_age}
            salary={item.employee_salary}
            image={require("../assets/mosh.jpg")}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              name: "Syed",
              age: "22",
              salary: "60000",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
