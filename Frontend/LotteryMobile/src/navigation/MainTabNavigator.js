import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Home from "../screens/Login";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Login: Login,
  },
  {
    defaultNavigationOptions: {
      backgroundColor: "#fff",
      headerTitleStyle: {
        fontWeight: "normal"
      }
    }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

export default HomeStack;
