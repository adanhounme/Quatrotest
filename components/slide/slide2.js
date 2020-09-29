import React from "react";
import { View, Text, Icon, TouchableOpacity, Image,   Dimensions,
 StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


let h = Dimensions.get("window").height;

const imag = {
  uri:
    "https://st4.depositphotos.com/11953928/38394/v/950/depositphotos_383942144-stock-illustration-covid-19-coronavirus-pandemic-delivery.jpg",
};

export default function Slide2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewtext1}>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "left", fontWeight: "bold", marginLeft: 20 }}

            > Back</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.text1}
              onPress={() =>
                navigation.navigate('Map')}
            > Skip</Text>
          </View>
        </View>


      </View>
      <View style={styles.viewimage}>
        <Image style={styles.image} source={require("./../../assets/slide/slide2.jpg")} />
      </View>
      <View style={styles.main_container}>
        <View style={{ flex: 1 }}>
          <View style={styles.viewtext2}>
            <Text style={styles.text2}>We’ll have it delivered</Text>
          </View>
          <View style={styles.viewtext3}>
            <Text style={styles.text3}>
              Our hassle free delivery service is world class and will have your
              order delivered to any address of your specification.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.viewbutton}>
        <TouchableOpacity

          onPress={() =>
            navigation.navigate('Map')}
          style={styles.appButtonContainer}>
          <FontAwesome5 style={styles.appButtonText} name={'arrow-right'} />
        </TouchableOpacity>
     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    paddingTop: 30,
    height: Dimensions.get("window").height

  },

  main_container: {
    flex: 3,
  },

  viewimage: {
    flex: 3,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  viewtext1: {
    flex: 1,
  },

  text1: {
    fontSize: 20,
    marginRight: 20,
    fontWeight: "bold",
    textAlign: "right",
  },

  viewtext2: {
    flex: 1,
  },

  viewtext3: {
    flex: 1,
  },

  text2: {
    fontSize: 50,
    marginRight: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#007FFF",
    textAlign: "center",
  },

  text3: {
    fontSize: 15,
    marginRight: 10,
    marginLeft: 10,
    color: "#000",
    textAlign: "center",
  },

  viewbutton: {
    width: '100%',
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-end"

  },

  appButtonContainer: {
    backgroundColor: "#007FFF",
    borderRadius: 70,
    width: "20%",
    height: 70,
    marginBottom: 40,
    paddingTop: 20,
    marginRight: 12
  },
  appButtonText: {
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
  },
});
