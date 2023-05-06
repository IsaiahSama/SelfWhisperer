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
import * as FileSystem from "expo-file-system";

const Record = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState();
  const [text, setText] = useState("");

  const base_URL = "some_valid_url";

  const micImage = isRecording
    ? require("../assets/mic_on.png")
    : require("../assets/mic_off.png");

  const buttonText = isRecording
    ? "Press me to Stop and Save your recording"
    : "Press me to start recording";

  const toggleRecording = async () => {
    try {
      if (!isRecording) {
        startRecording();
      } else {
        stopRecording();
      }
    } catch (err) {
      console.log("An error occurred with recording: ", err.message);
    } finally {
      setIsRecording((prevRecording) => !prevRecording);
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
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      const fileInfo = await FileSystem.getInfoAsync(uri);
      const file = {
        uri: fileInfo.uri,
        type: "audio/x-m4a",
        name: `${Date.now()}.m4a`,
      };
      // pass the file object to your API
      words = await uploadAudio(file);
      console.log(words);
    } catch (error) {
      console.error(error);
    }
  }

  async function uploadAudio(file) {
    const formData = new FormData();
    formData.append("audio", file);
    try {
      const response = await fetch(`${base_URL}/transcribe/`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
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
