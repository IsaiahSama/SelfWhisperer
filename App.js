import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Record from "./pages/Record";
import Speech from "./pages/Speech";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Record">
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Files" component={Speech} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
