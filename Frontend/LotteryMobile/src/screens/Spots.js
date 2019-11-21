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
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";

import Modal, {
  ModalFooter,
  ModalButton,
  ModalContent,
  ModalTitle,
  BottomModal
} from "react-native-modals";

import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

import Icon from "react-native-vector-icons/Ionicons";

import Colors from "../constants/Colors";
import bgimage from "../assets/images/background2.png";
import logo from "../assets/images/logo.png";

import Spot from "../components/Spot";

const { width: WIDTH } = Dimensions.get("window");
const imgURI =
  "https://icon-library.net/images/shop-icon-png/shop-icon-png-6.jpg";

export default class Spots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: false,
      nameLocal: "",
      juegoSel: "Nacional",
      numeroJuego: "",
      cantJuego: "",
      juegos: [
        { label: "Nacional", value: "Nacional" },
        { label: "Panameña", value: "Panameña" },
        { label: "Dominicana", value: "Dominicana" }
      ]
    };
  }

  static navigationOptions = {
    header: null
  };

  buyGame = () => {
    if (this.state.numeroJuego == "" || this.state.cantJuego == "") {
      ToastAndroid.show(
        "Por favor rellene todos los espacios",
        ToastAndroid.SHORT
      );
    } else if (this.state.numeroJuego.length > 2) {
      ToastAndroid.show(
        "El número a jugar debe de estar entre 00-99",
        ToastAndroid.SHORT
      );
    } else {
      this.setState({ games: false });
      Alert.alert(
        "Compra realizada",
        "Se jugaron " +
          this.state.cantJuego +
          " colones al número " +
          this.state.numeroJuego +
          " de la loteria " +
          this.state.juegoSel +
          " en " +
          this.state.nameLocal
      );
    }
  };

  render() {
    return (
      <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}> Puntos de Venta </Text>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "El Chino", games: true })
              }
            >
              <Spot name={"El Chino"} location={"Cartago"} uri={imgURI} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Tiempos Maria", games: true })
              }
            >
              <Spot name={"Tiempos Maria"} location={"Tejar"} uri={imgURI} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Divino Niño", games: true })
              }
            >
              <Spot
                name={"Divino Niño"}
                location={"Despamparados"}
                uri={imgURI}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Tiempos Rosa", games: true })
              }
            >
              <Spot name={"Tiempos Rosa"} location={"San José"} uri={imgURI} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Tiempos Miguel", games: true })
              }
            >
              <Spot
                name={"Tiempos Miguel"}
                location={"Mercado Central"}
                uri={imgURI}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Tiempos 80%", games: true })
              }
            >
              <Spot name={"Tiempos 80%"} location={"San José"} uri={imgURI} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Super Rodríguez", games: true })
              }
            >
              <Spot
                name={"Super Rodríguez"}
                location={"Cartago"}
                uri={imgURI}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.setState({ nameLocal: "Tiempos", games: true })
              }
            >
              <Spot
                name={"Tiempos"}
                location={"Mercado Cartago"}
                uri={imgURI}
              />
            </TouchableOpacity>
          </ScrollView>

          <View>
            <Modal
              onHardwareBackPress={() => {
                this.setState({ games: false });
                return true;
              }}
              visible={this.state.games}
            >
              <BottomModal
                width={WIDTH}
                height={550}
                visible={this.state.games}
              >
                <ModalTitle title={"Juegos disponibles"} />
                <ModalContent style={styles.modalContent}>
                  <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    keyboardVerticalOffset={10}
                  >
                    <ScrollView>
                      <View>
                        <Text style={styles.modalText}>
                          Seleccione un juego:
                        </Text>

                        <View
                          style={{
                            borderWidth: 0.5,
                            borderColor: "#000000",
                            borderRadius: 15
                          }}
                        >
                          <RNPickerSelect
                            items={this.state.juegos}
                            useNativeAndroidPickerStyle={true}
                            style={{
                              inputAndroid: {
                                width: WIDTH - 50,
                                fontWeight: "bold"
                              }
                            }}
                            placeholder={{}}
                            onValueChange={(value) =>
                              this.setState({ juegoSel: value })
                            }
                          />
                        </View>

                        <Text style={styles.modalText}>
                          Digite el numero a jugar:
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder={"Número"}
                          onChangeText={(numeroJuego) =>
                            this.setState({ numeroJuego })
                          }
                          keyboardType="numeric"
                          placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                          underlineColorAndroid="transparent"
                          ref={(numero) => (this.Numero = numero)}
                          onSubmitEditing={() => this.Cantidad.focus()}
                        />

                        <Text style={styles.modalText}>
                          Digite la cantidad de dinero a apostar:
                        </Text>
                        <TextInput
                          style={styles.input}
                          placeholder={"Cantidad a apostar"}
                          onChangeText={(cantJuego) =>
                            this.setState({ cantJuego })
                          }
                          keyboardType="number-pad"
                          placeholderTextColor={"rgba(66, 66, 66, 0.5)"}
                          underlineColorAndroid="transparent"
                          ref={(cantidad) => (this.Cantidad = cantidad)}
                        />

                        <View style={styles.buttonContainer}>
                          <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.buyGame()}
                          >
                            <Text style={styles.btnText}> Aceptar </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={styles.btn}
                            onPress={() => this.setState({ games: false })}
                          >
                            <Text style={styles.btnText}> Cancelar </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ScrollView>
                  </KeyboardAvoidingView>
                </ModalContent>
              </BottomModal>
            </Modal>
          </View>
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
    justifyContent: "center",
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
