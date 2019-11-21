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

import Ticket from "../components/Ticket";

const { width: WIDTH } = Dimensions.get("window");

export default class Historial extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}> Transacciones </Text>
          </View>
          <ScrollView>
            <Ticket
              type={"Jugada"}
              date={"Hoy"}
              spended={true}
              monto={"1000"}
            />

            <Ticket
              type={"Recarga"}
              date={"Hoy"}
              spended={false}
              monto={"5000"}
            />

            <Ticket
              type={"Jugada"}
              date={"Hoy"}
              spended={true}
              monto={"1250"}
            />

            <Ticket
              type={"Premio"}
              date={"Hoy"}
              spended={false}
              monto={"6000"}
            />

            <Ticket
              type={"Jugada"}
              date={"Hoy"}
              spended={true}
              monto={"1100"}
            />

            <Ticket
              type={"Recarga"}
              date={"Hoy"}
              spended={false}
              monto={"3000"}
            />

            <Ticket
              type={"Premio"}
              date={"Hoy"}
              spended={false}
              monto={"6000"}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
  input: {
    borderWidth: 0.5,
    borderColor: "#000000",
    borderRadius: 15,
    width: WIDTH - 50,
    height: 50,
    alignItems: "center",
    paddingLeft: 10,
    fontSize: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 8,
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
    justifyContent: "center",
    padding: 10
  },
  btn: {
    width: 100,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#81878a",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  btnText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center"
  },
  modalContent: {
    alignItems: "flex-start"
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10
  },
  modalPicker: {
    fontSize: 40,
    width: WIDTH - 50,
    borderWidth: 0.5,
    borderColor: "purple"
  }
});
