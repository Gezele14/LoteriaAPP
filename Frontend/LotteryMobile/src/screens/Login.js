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
  ActivityIndicator,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal, {
  ModalFooter,
  ModalButton,
  ModalContent
} from "react-native-modals";

import Colors from "../constants/Colors";
import bgimage from "../assets/images/background.png";
import logo from "../assets/images/logo.png";

const { width: WIDTH } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acces: false,
      showPass: true,
      press: false,
      loading: false,
      ced: "",
      pass: ""
    };
  }

  login = () => {
    let cedula = "304960671";
    let pass = "gera1234";

    if (this.state.ced == "" || this.state.pass == "") {
      ToastAndroid.show(
        "Por favor rellene todos los datos",
        ToastAndroid.SHORT
      );
    } else if (this.state.ced == cedula && this.state.pass == pass) {
      this.props.navigation.navigate("Profile");
      ToastAndroid.show("Bienvenido", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Cedula o contraseña no coinciden", ToastAndroid.SHORT);
    }
  };

  searchUsr = () => {
    if (this.state.ced == "" || this.state.pass == "") {
      ToastAndroid.show(
        "Por favor digite rellene todos los espacios",
        ToastAndroid.SHORT
      );
    } else {
      this.setState({ loading: true });
      fetch("http://192.168.8.102:3800/api/user/" + this.state.ced, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          if (res == null) {
            ToastAndroid.show("Usuario no existe", ToastAndroid.SHORT);
          } else if (res.ced == this.state.ced) {
            if (res.password == this.state.pass) {
              ToastAndroid.show("Usuario existe", ToastAndroid.SHORT);
            } else {
              ToastAndroid.show("Contraseña invalida", ToastAndroid.SHORT);
            }
          }
        })
        .catch(function(error) {
          if (error.message == "Network request failed") {
            ToastAndroid.show(
              "No se pudo conectar con el servidor",
              ToastAndroid.SHORT
            );
          }
        });
    }

    this.setState({ loading: false });
  };

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View style={styles.logoContainer}>
            <Image source={logo} />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name={"ios-person"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              onChangeText={(ced) => this.setState({ ced })}
              placeholder={"Cédula"}
              keyboardType="number-pad"
              placeholderTextColor={"rgba(172, 187, 194, 0.45)"}
              underlineColorAndroid="transparent"
              onSubmitEditing={() => this.password.focus()}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon
              name={"ios-lock"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              onChangeText={(pass) => this.setState({ pass })}
              placeholder={"Contraseña"}
              keyboardType="twitter"
              secureTextEntry={this.state.showPass}
              placeholderTextColor={"rgba(172, 187, 194, 0.45)"}
              underlineColorAndroid="transparent"
              ref={(pass) => (this.password = pass)}
            />
            <TouchableOpacity
              style={styles.btnEye}
              onPress={this.showPass.bind(this)}
            >
              <Icon
                name={this.state.press == false ? "ios-eye" : "ios-eye-off"}
                size={26}
                color={"rgba(255, 255, 255, 0.45)"}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => this.login()}
          >
            <Text style={styles.text}> Login </Text>
          </TouchableOpacity>

          <View style={styles.regContainer}>
            <Text style={styles.textReg}>¿No tienes tu cuenta aun?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SingUp")}
            >
              <Text style={styles.textRegbtn}>Registrate aqui</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Modal visible={this.state.loading} width={150} height={80}>
              <ModalContent>
                <ActivityIndicator size="large" color="#000000" />
              </ModalContent>
            </Modal>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 55
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0, 0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 40
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 40
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#81878a",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  },
  regContainer: {
    marginTop: 20,
    flexDirection: "row"
  },
  textReg: {
    marginLeft: 5,
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "left"
  },
  textRegbtn: {
    marginLeft: 5,
    color: "#ff333d",
    fontSize: 12,
    textAlign: "left"
  },
  loadingContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
