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
    this.props.navigation.navigate("Profile");
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
        <View style={styles.logoContainer}>
          <Image source={logo} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Bienvenido a Loteria App</Text>
          <View style={styles.textContainer}>
            <Text style={styles.bodyText}>
              Aquí podrás recargar saldo en tiendas fisicas, con ese dinero
              podrás apostar a un número y duplicar la inversión{" "}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.btnText}> Ingresar </Text>
        </TouchableOpacity>
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
  textContainer: {
    width: WIDTH - 50,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  bodyText: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF"
  },
  btnLogin: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#81878a",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  infoContainer: {
    borderWidth: 2,
    justifyContent: "center",
    alignItems: 'center',
    height: 200,
    width: WIDTH - 25,
    borderRadius: 15,
    borderColor: "#000000"
  },
  btnText:{
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: 'bold'
  }

});
