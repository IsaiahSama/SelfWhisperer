// This is where the transcribed speech files will reside, and be accessed from
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import File from "../components/File";

const Speech = ({ navigation }) => {
  const [files, setFiles] = useState([]);

  useEffect(async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.error(e);
    }

    for (let key of keys) {
      let value = await AsyncStorage.getItem(key);
      setFiles([...files, { name: key, text: value }]);
    }
  }, []);

  return (
    <ScrollView style={{ flex: 1, marginLeft: 5 }}>
      <></>
      {/* Go through each file in Files, and then display them or something ig... */}
      <File
        name="Testing"
        preview="These are the first few words of the..."
        link={"Something"}
      />
      <File
        name="Another Test"
        preview="Somebody once told me the world was mac..."
        link="Somewhere"
      />
    </ScrollView>
  );
};

export default Speech;
