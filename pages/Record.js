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

import { Audio } from "expo-av";

const Record = ({ navigation }) => {
  const [recording, setRecording] = useState(false);
  const [recorder, setRecorder] = useState();

  const micImage = recording
    ? require("../assets/mic_on.png")
    : require("../assets/mic_off.png");

  const buttonText = recording
    ? "Press me to Stop and Save your recording"
    : "Press me to start recording";

  const toggleRecording = async () => {
    try {
      if (!recording) {
        startRecording();
      } else {
        stopRecording();
      }
    } catch (err) {
      console.log("An error occurred with recording: ", err.message);
    } finally {
      setRecording((prevRecording) => !prevRecording);
    }
  };

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const rec = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecorder(rec.recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording");
    await recorder.stopAndUnloadAsync();
    const uri = recorder.getURI();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });

    setRecorder(undefined);
    console.log("Recording stopped and stored at", uri);
  }

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
