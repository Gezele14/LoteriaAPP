import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Colors from "../constants/Colors";
import bgimage from "../assets/images/background.png";
import logo from "../assets/images/logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class SingUp extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return <Text>Hola este es el registro</Text>;
  }
}
