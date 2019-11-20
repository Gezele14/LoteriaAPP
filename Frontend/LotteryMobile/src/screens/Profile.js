import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Colors from "../constants/Colors";
import bgimage from "../assets/images/background2.png";
import logo from "../assets/images/logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class Profile extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Hola este es el perfil</Text>
      </View>
    );
  }
}
