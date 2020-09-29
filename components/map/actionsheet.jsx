import React, { createRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ActionSheet from "react-native-actions-sheet";
import MapView, { Marker } from "react-native-maps";
import { interpolate } from "react-native-reanimated";

const actionSheetRef = createRef();
const [alignment] = useState(new Animated.Value(0));

const bringUpActionSheet = () => {
  Animated.timing(alignment, {
    toValue: 1,
    duration: 500,
  }).start();
};
const actionSheetIntropolate = interpolate({
  inputRange: [0, 1],
  outputRange: [-height / 2.4 + 5, 0],
});
const actionsheetStyle = {
  bottom: actionSheetIntropolate,
};

const gestureHandler = (e) => {
  if (e.nativeEvent.contentOffset.y > 0) bringUpActionSheet();
  else if (e.nativeEvent.contentOffset.y < 0) hidetheActionSheet();
};

const hidetheActionSheet = () => {
  Animated.timing(alignment, {
    toValue: 0,
    duration: 500,
  }).start();
};

export default function Actionsheet() {
  const _goToYosemite = () => {
    openMap({ latitude: 37.865101, longitude: -119.53833 });
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width: "100%", flex: 1, height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Animated.View style={[styles.container, actionsheetStyle]}>
        <View>
          <ScrollView onScroll={(e) => gestureHandler(e)}></ScrollView>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#fff',
    position: absolute,
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    width: width / 1.5,
    borderTopRightRaduis : 40,
    borderTopLeftRaduis: 40
  }, 
  gradder: {
    width: 70,
    borderTopColor: '#ccc',
    borderTopWidth: 5
  }
});
