import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export default function Spot(props) {
  let uri = props.uri;

  return (
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{
              uri: uri
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}> {"Nombre: " + props.name}</Text>
          <Text style={styles.text}> {"Localización: " + props.location}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 5,
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.33)",
    borderBottomWidth: 2,
    borderBottomColor: "#9c9c9c",
    width: WIDTH -30,
    height: 90
  },
  imageContainer: {
    marginLeft: 15
  },
  textContainer: {
    width: WIDTH - 120,
    marginLeft: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: 'center',
    paddingBottom: 2,
    marginTop: 5
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
