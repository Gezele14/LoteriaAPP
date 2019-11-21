import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default function Tiket(props) {
  let tipo = props.type;
  let fecha = props.date;
  let spended = props.spended;
  let monto = props.monto;

  let redArrow = "https://library.kissclipart.com/20180831/tbe/kissclipart--aa4ce69070fc1812.png"
  let greenArrow = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Green_Arrow_Left.svg/1024px-Green_Arrow_Left.svg.png"

  let colorRed = "#8a1111"
  let colorGreen = "#14c428"

  return (
    <View style={styles.contentContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: spended ? redArrow : greenArrow
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text
          style={{
            color: spended ? colorRed : colorGreen,
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          {"Tipo: " + tipo}
        </Text>

        <Text
          style={{
            color: spended ? colorRed : colorGreen,
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          {"Fecha: " + fecha}
        </Text>

        <Text
          style={{
            color: spended ? colorRed : colorGreen,
            fontSize: 16,
            fontWeight: "bold"
          }}
        >
          {"Monto: ₡" + monto}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: "rgba(86, 92, 87,0.40)",
    width: WIDTH - 40,
    height: 80
  },
  imageContainer: {
    marginLeft: 50
  },
  textContainer: {
    width: WIDTH - 120,
    marginLeft: 50,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 2,
    marginTop: 5
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
