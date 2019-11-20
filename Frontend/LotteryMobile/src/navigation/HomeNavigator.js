import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import SingUp from "../screens/SingUp";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Login: Login,
    SingUp: SingUp
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


HomeStack.path = "";

export default HomeStack;
