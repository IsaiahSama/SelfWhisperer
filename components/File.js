// Represents a singular file

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const File = ({ name, preview }) => {
  const openFile = () => {
    console.log("Opens file lol.");
  };

  return (
    <TouchableOpacity onPress={openFile}>
      <View style={styles.card}>
        <Text>Name: {name}</Text>
        <Text>Preview: {preview}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    maxHeight: 90,
    height: 70,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    padding: 10,
    elevation: 10,
  },
});

export default File;
