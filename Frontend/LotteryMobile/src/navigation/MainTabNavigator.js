import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Spots from "../screens/Spots";
import Profile from "../screens/Profile";
import Historial from "../screens/Historial";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

//==================================================================================
//--------------------------------------Spots---------------------------------------
//==================================================================================
const SpotStack = createStackNavigator(
  {
    Spots: Spots
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

SpotStack.navigationOptions = {
  tabBarLabel: "Lugares",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"ios-pin"} />
};

SpotStack.path = "";

//==================================================================================
//-------------------------------------Perfil---------------------------------------
//==================================================================================
const ProfileStack = createStackNavigator(
  { Profile: Profile },
  {
    defaultNavigationOptions: {
      backgroundColor: "#fff",
      header: null
    }
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Perfil",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-person"} />
  )
};

ProfileStack.path = "";

//==================================================================================
//-------------------------------------Historial------------------------------------
//==================================================================================
const HistorialStack = createStackNavigator(
  { Profile: Profile },
  {
    defaultNavigationOptions: {
      backgroundColor: "#fff",
      header: null
    }
  },
  config
);

HistorialStack.navigationOptions = {
  tabBarLabel: "Historial",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-time"} />
  )
};

HistorialStack.path = "";

//==================================================================================
//-------------------------------Barra de estado------------------------------------
//==================================================================================

const tabNavigator = createBottomTabNavigator({
  SpotStack,
  ProfileStack,
  HistorialStack
});

tabNavigator.navigationOptions = {
  backgroundColor: "#a3a0a0"
};
tabNavigator.path = "";

export default tabNavigator;
