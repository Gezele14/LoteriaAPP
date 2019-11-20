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

export default class SingUp extends React.Component {
  constructor() {
    super();

    this.state = {
      nombre: "",
      pApellido: "",
      sApellido: "",
      ced: "",
      pass: "",
      passConf: ""
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          keyboardVerticalOffset = {10}
        >
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.text}> Crear Usuario</Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder={"Nombre"}
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(nombre) => this.setState({ nombre })}
                underlineColorAndroid="transparent"
                ref={(name) => (this.Name = name)}
                onSubmitEditing={() => this.PApellido.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder={"Primer Apellido"}
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(pApellido) => this.setState({ pApellido })}
                underlineColorAndroid="transparent"
                ref={(pApellido) => (this.PApellido = pApellido)}
                onSubmitEditing={() => this.SApellido.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder={"Segundo Apellido"}
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(sApellido) => this.setState({ sApellido })}
                underlineColorAndroid="transparent"
                ref={(sApellido) => (this.SApellido = sApellido)}
                onSubmitEditing={() => this.Cedula.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder={"Cédula"}
                keyboardType="number-pad"
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(ced) => this.setState({ ced })}
                underlineColorAndroid="transparent"
                ref={(ced) => (this.Cedula = ced)}
                onSubmitEditing={() => this.Password.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder={"Contraseña"}
                secureTextEntry={true}
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(pass) => this.setState({ pass })}
                underlineColorAndroid="transparent"
                ref={(pass) => (this.Password = pass)}
                onSubmitEditing={() => this.PasswordConf.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder={"Confirmar contraseña"}
                secureTextEntry={true}
                placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                onChangeText={(passConf) => this.setState({ passConf })}
                underlineColorAndroid="transparent"
                ref={(passConf) => (this.PasswordConf = passConf)}
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => ToastAndroid.show("Aceptar",ToastAndroid.SHORT)}
                >
                  <Text style={styles.btnText}> Aceptar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => ToastAndroid.show("Cancelar",ToastAndroid.SHORT)}
                >
                  <Text style={styles.btnText}> Cancelar </Text>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  input: {
    marginTop: 20,
    width: WIDTH - 30,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0, 0.09)",
    color: "rgba(0,0,0,0.9)",
    marginHorizontal: 25
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40
  },
  titleContainer: {
    width: WIDTH - 20,
    alignItems: "center",
    borderBottomColor: "#000000",
    borderBottomWidth: 3
  },
  buttonContainer: {
    flexDirection: "row",
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
    marginRight:10
  },
  btnText:{
    color: "#ffffff",
    fontSize: 20,
    textAlign: 'center'
  }
});
