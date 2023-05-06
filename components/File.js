// Represents a singular file

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const File = ({ name, text }) => {
  const deleteFile = () => {
    AsyncStorage.removeItem(name);
  };

  return (
    <TouchableOpacity onPress={deleteFile}>
      <View style={styles.card}>
        <Text>Name: {name}</Text>
        <Text>Text: {text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    height: 70,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 10,
    elevation: 10,
  },
});

export default File;
