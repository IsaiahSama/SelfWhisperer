// This is where the transcribed speech files will reside, and be accessed from
import React, { useState } from "react";
import { ScrollView } from "react-native";
import File from "../components/File";

const Speech = ({ navigation }) => {
  const [files, setFiles] = useState([]);

  return (
    <ScrollView>
      <></>
      {/* Go through each file in Files, and then display them or something ig... */}
      <File name="Testing" preview="These are the first few words of the..." />
      <File
        name="Another Test"
        preview="Somebody once told me the world was mac..."
      />
    </ScrollView>
  );
};

export default Speech;
