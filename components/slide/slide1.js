import React from "react";
import { View, Text, Icon, Image, Button, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { useNavigation } from "@react-navigation/native";

const imag = {
  uri: "",
};

export default function Slide1() {
  const goToAbout = () => {
    Actions.about();
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.viewtext1}>
        <Text style={styles.text1}
           onPress={() =>
            navigation.navigate('Map')}
        > Skip</Text>
      </View>
      <View style={styles.viewimage}>
        <Image style={styles.image} source={require("./../../assets/slide/slide1.jpg")} />
      </View>
      <View style={styles.main_container}>
        <View style={{ flex: 1 }}>
          <View style={styles.viewtext2}>
            <Text style={styles.text2}>Find The Food You Want</Text>
          </View>
          <View style={styles.viewtext3}>
            <Text style={styles.text3}>
              Our app helps you find the right food for every mood, any time &
              any day.
            </Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.viewbutton}>
        <Button
          title="titre"
          Icon={{ name: "check-circle", color: "#fff" }}
          buttonStyle={{ justifyContent: "flex-start" }}
          style={styles.button}
          onPress={goToAbout}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    paddingTop: 30,

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
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "90%",
    borderRadius: 50,
  },

  button: {
    textAlign: "right",
    borderRadius: 50,
  },
});
