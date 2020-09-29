import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import Slide from "./components/slide/slide";
import Map from "./components/map/map";
import Restau from "./components/restau/restau";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
// import Store from "./components/data/configurestore";

//install that first
// yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Slide"
  >
    <Stack.Screen name="Slide" component={Slide} />
    <Stack.Screen name="Map" component={Map} />
    <Stack.Screen name="Restau" component={Restau} />
  </Stack.Navigator>
);

export default function App() {
  return (
    // <Provider store={store} >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
