import React from "react";
import { Router, Scene, View } from "react-native-router-flux";
import Slide from "./components/slide/slide";
import Slide2 from "./components/slide/slide2";
import Map from "./components/map/map";

const Routes = () => (
  <Router>
    <View>
      <View key="Slide1" component={Slide} initial={true} ></View>
      <View key="Slide2" component={Slide2} ></View>
      <View key="about" component={Map} ></View>
    </View>

    {/* <Scene>
      <Scene/>
      <Scene/>
    </Scene> */}
  </Router>
);
export default Routes;
