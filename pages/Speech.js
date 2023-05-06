// This is where the transcribed speech files will reside, and be accessed from
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import File from "../components/File";

const Speech = ({ navigation }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const handleFiles = async () => {
      let keys = [];
      try {
        keys = await AsyncStorage.getAllKeys();
      } catch (e) {
        console.error(e);
      }

      for (let key of keys) {
        let value = await AsyncStorage.getItem(key);
        setFiles([...files, { name: key, text: value }]);
        // await AsyncStorage.removeItem(key);
      }
    };

    handleFiles();
  }, []);

  return (
    <ScrollView style={{ flex: 1, marginLeft: 5 }}>
      <Text>
        Tap an entry to delete it. Reload the page to confirm deletion.
      </Text>
      {/* Go through each file in Files, and then display them or something ig... */}

      {files.map((file) => (
        <File key={file.name} name={file.name} text={file.text} />
      ))}
    </ScrollView>
  );
};

export default Speech;
