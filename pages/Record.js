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

  const micImage = recording
    ? require("../assets/mic_on.png")
    : require("../assets/mic_off.png");

  const buttonText = recording
    ? "Press me to Stop and Save your recording"
    : "Press me to start recording";

  const toggleRecording = () => {
    if (recording) {
      console.log("Stopping recording");
    } else {
      console.log("Starting recording");
    }
    setRecording((prevRecording) => !prevRecording);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleRecording}>
        <Image source={micImage} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.spacer} />
      <Text>{buttonText}</Text>
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
