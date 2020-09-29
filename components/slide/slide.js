import React from "react";
import {
  View,
  Text,
  Icon,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
// import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const height = width * 2;
const h = width * 2

const tab_slide = [
  Slide1, Slide2
]

export default function Slide() {
  return (
    <View style={{ width, h }}>
      <ScrollView
        horizontal
        style={{ width, h }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flex: 1, width, h }}>
          
          <Slide1 />
        </View>
        <View style={{ flex: 1, width, height}}>
          <Slide2 />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          position: "absolute",
          bottom: 0,
        }}
      >
        {/* <View>
          <Text style={{marginTop: 0}}>⬤</Text>
        </View> */}
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 5,
  },

});
