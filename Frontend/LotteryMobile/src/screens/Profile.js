import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  Animated,
  TextInput,
  Dimensions,
  ToastAndroid,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

import Colors from "../constants/Colors";
import bgimage from "../assets/images/background2.png";
import logo from "../assets/images/logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class Profile extends React.Component {
  constructor() {
    super();

    this.animValue = new Animated.Value(0);
    this.state = {
      coins: "5000",
      Name: "Gerardo Zeledon Martinez",
      ced: "304960671",
      logout: false
    };
  }

  Logout = () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Desea cerrar sesión?",
      [
        
        {
          text: "Si",
          onPress: () => this.props.navigation.navigate("MainStack")
        },
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed")
        },
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.titletext}> Información </Text>
          </View>
          
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.coinView}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Tu bolsa:</Text>
            <Text style={styles.coinText}>{"₡" + this.state.coins}</Text>
          </Animatable.View>

          <Text style={styles.text}> {this.state.Name}</Text>
          <Text style={styles.text}> {"Cédula: " + this.state.ced}</Text>

          <TouchableOpacity style={styles.btn} onPress={() => this.Logout()}>
            <Text style={styles.btnText}> Cerrar Sesión </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column"
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 40
  },
  titletext: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom:8,
    color: "#FFFFFF"
  },
  titleContainer: {
    height: 70,
    justifyContent: "flex-end",
    marginBottom: 5,
    width: WIDTH,
    alignItems: "center",
    backgroundColor: "#415557"
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10
  },
  btn: {
    width: 120,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#81878a",
    justifyContent: "center",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center"
  },
  coinView: {
    marginTop: 25,
    width: 180,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 100
  },
  coinText: {
    fontSize: 60,
    fontWeight: "bold"
  }
});
