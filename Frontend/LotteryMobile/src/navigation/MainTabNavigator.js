import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";

import Login from "../screens/Login";
import SingUp from "../screens/SingUp";
import Spots from "../screens/Spots";
import Profile from "../screens/Profile";
import Historial from "../screens/Historial";
import Welcome from "../screens/Welcome"

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

//==================================================================================
//--------------------------------------Main---------------------------------------
//==================================================================================
const MainStack = createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    SingUp: SingUp,
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

MainStack.navigationOptions = {
  tabBarLabel: "Lugares",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"ios-pin"} />
};

MainStack.path = "";

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
  { Historial: Historial },
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
    <TabBarIcon focused={focused} name={"ios-stats"} />
  )
};

HistorialStack.path = "";

//==================================================================================
//-------------------------------Barra de estado------------------------------------
//==================================================================================

const tabNavigator = createMaterialTopTabNavigator(
  {
    SpotStack,
    ProfileStack,
    HistorialStack
  },
  {
    initialRouteName: "ProfileStack",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      
      style:{
        backgroundColor: "#415557",
      },
      indicatorStyle : {
        backgroundColor: "#FFFFFF"
      }
    },
    tabBarPosition: 'bottom',
    
  }
    
);

tabNavigator.path = "";



//====================================================================
const MySwitchNavigator = createSwitchNavigator(
  {
    MainStack,
    tabNavigator
  }
)
export default MySwitchNavigator;
