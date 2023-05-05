// This is the main page for the application where recording may take places.

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const Record = ({ navigation }) => {
  const [recording, setRecording] = useState(false);

  const doSomething = () => {
    setRecording(!recording);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={doSomething}>
        {recording ? (
          <Image
            source={require("../assets/mic_on.png")}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../assets/mic_off.png")}
            style={styles.image}
          />
        )}
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Text>Press me to start recording</Text>
      <View style={styles.spacer} />
      <Button
        onPress={() => {
          navigation.navigate("Files");
        }}
        title="Go to Transcriptions"
      />
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
  },
  spacer: {
    margin: 10,
  },
});

export default Record;
