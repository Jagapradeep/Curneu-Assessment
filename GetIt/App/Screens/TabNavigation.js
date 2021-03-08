import React from "react";

import RecordsScreen from "./RecordsScreen";
import RecordEditScreen from "./RecordEditScreen";
import colors from "../config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Home"
      component={RecordsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={RecordEditScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Ionicons name="create" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

function TabNavigation(props) {
  return <TabNavigator />;
}

export default TabNavigation;
