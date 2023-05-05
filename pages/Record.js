// This is the main page for the application where recording may take places.

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Record = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/mic_off.png")} style={styles.image} />
      <Text>Press me to start recording</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Record;
