import React, { createRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { data } from "./../../const/restau_data";
import MapView, { Marker, Circle } from "react-native-maps";
import Custom from "./customMarker";
import { useNavigation } from "@react-navigation/native";
import { componentDidMount, componentDidUpdate } from "../../utility/utils";
import {getDistance, getPreciseDistance} from 'geolib';

const actionSheetRef = createRef();

const imag = {
  uri:
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

export default function Map() {
  const navigation = useNavigation();
  let state = {
    location: null,
    latitude: 37.785834,
    longitude: -122.406417,
  };



  componentDidMount(() => {
    // console.log("Component did mount!");
    testUsetState()

  });


  // example using useState
  const [Location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const testUsetState = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // location = JSON.stringify(position.coords.latitude, position.coords.longitude );

        // calculateDistance(state.latitude, state.longitude)
        // filtremarker(position);
        let locate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        setLocation(locate);
        // console.log(Location.latitude, Location.longitude)
      
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  // const findCoordinates = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       location = JSON.stringify(position.coords);
  //       state.latitude = position.coords.latitude;
  //       state.longitude = position.coords.longitude;
  //       // calculateDistance(state.latitude, state.longitude)
  //       // filtremarker(position);
  //       locate = setState({ location });

  //       Alert.alert(location);
  //       return locate;
  //     },
  //     (error) => Alert.alert(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  //   Alert.alert(locate);
  // };

  const openPopUp = () => {
    this.bottomSheet.open();
  };

  // const calculateDistance = (coord1, coord2) => {
  //   var dis = getDistance(
  //     {latitude: coord1, longitude: coord2},
  //     {latitude: 51.528308, longitude: -0.3817765},
  //   );
  //   alert(
  //     `Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM\n\n${coord1} ttt\n\n${coord2}`
  //   );
  // };

  // function filtremarker(posi) {
  //   var dis = getDistance(
  //     { latitude: posi.latitude, longitude: posi.longitude },
  //     { latitude: 37.785834, longitude: -122.406417 }
  //   );

  //   if (dis / 1000 <= 3000) {
  //     return obj;
  //   }
  // }

  // const markers = data.filter(filtremarker)
  useEffect(() => {
    testUsetState()
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 20 }}>
        <View style={{ elevation: 3, width: "70%" }}></View>
        <MapView
          region={{
            latitude: Location.latitude,
            longitude: Location.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          minZoomLevel={13}
          maxZoomLevel={20}
          style={{ width: "100%", height: "100%" }}
          // onMapReady={() => testUsetState()}
        >
          {data.map((marker) => {
            var dis = getDistance(
              {latitude: marker.latitude, longitude: marker.longitude},
              {latitude: Location.latitude, longitude: Location.longitude},
            );
            if ((dis / 1000) <= 3) {
              return (
                <Marker
                  key={marker.id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.nom_restau}
                  description={"texte"}
                >
                  <Custom key={marker.id.toString()} item={marker} />
                </Marker>
              );
            }
          })}
          {/* <Marker
            coordinate={{ latitude: 6.3758116, longitude: 2.4009284 }}
            title={"Votre position"}
          > */}
          <Circle
            center={{ latitude: Location.latitude, longitude: Location.longitude }}
            radius={3000}
            fillColor={"#ADD8E69F"}
          />
          {/* </Marker> */}
        </MapView>
      </View>

      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[styles.touchopac]}
          onPress={() => {
            actionSheetRef.current ?.setModalVisible();
          }}
        >
          {/* <Text>locate: {Location.latitude}, {Location.longitude} </Text> */}
          <Text style={[styles.gradder]}></Text>
        </TouchableOpacity>


        <ActionSheet
          ref={actionSheetRef}
          height={400}
          closeOnPressBack={true}
          closable={true}
        >
          <View style={{ alignItems: "center", marginTop: 5 }}>
            <Text style={[styles.gradder]}></Text>
          </View>

          {data.map((restau) => {
              var dis = getDistance(
                {latitude: restau.latitude, longitude: restau.longitude},
                {latitude: Location.latitude, longitude: Location.longitude},
              );
            if ((dis / 1000) <= 3 ) {
              return (
                <View key={restau.id}>
                  <TouchableOpacity
                    style={styles.action_view}
                    onPress={() => navigation.navigate("Restau")}
                  >
                    <View style={styles.action_view1}>
                      <Image style={styles.image} source={imag} />
                    </View>
                    <View style={styles.action_view2}>
                      <Text style={styles.actio_view_text1}>
                        {restau.nom_restau}{" "}
                      </Text>
                      <Text style={styles.actio_view_text2}>
                        {restau.detail}
                      </Text>
                      <Text style={styles.actio_view_text3}>
                        {restau.distance} km, livraison en {restau.temps} min
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ActionSheet>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  touchopac: {
    alignItems: "center",
    width: "100%",
  },
  topBarStyle: {
    width: 50,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#000000",
  },
  image: {
    width: 120,
    height: 90,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "gray",
  },
  gradder: {
    alignItems: "flex-end",
    width: 60,
    borderTopColor: "#ccc",
    borderTopWidth: 5,
  },
  action_view: {
    flex: 1,
    flexDirection: "row",
  },
  action_view1: {
    flex: 1,
  },
  action_view2: {
    flex: 1,
  },

  actio_view_text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 3,
    marginBottom: 5,
  },

  actio_view_text2: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 5,
  },

  actio_view_text3: {
    color: "#cca",
    marginTop: 3,
    marginBottom: 5,
  },
});
