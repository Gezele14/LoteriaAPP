import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import ListItem from "../ListItem";
import Colors from "../constants/Colors";

export default class Home extends React.Component {
  state = {};

  static navigationOptions = {
    title: "Selector de color",
    headerStyle: {
      backgroundColor: Colors.headerColor,
      textAlign: "center"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hola, este es el login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
});
