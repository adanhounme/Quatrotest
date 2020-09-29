import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const imag = {
  uri:
    "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};
export default function Restauitem() {
  return (
    <View style={styles.action_view}>
      
      <View style={styles.action_view2}>
        <Text style={styles.actio_view_text1}>Karim 24</Text>
        <Text style={styles.actio_view_text2}>XOF 15.000 5.1</Text>
        {/* <Button style={styles.actio_view_text3} title="text" /> */}
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}> text </Text>
        </TouchableOpacity>
        {/* <Text style={styles.actio_view_text3}>5km, livraison en 24 min </Text> */}
      </View>
      <View style={styles.action_view1}>
        <Image style={styles.image} source={imag} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    margin: 20,
    flexDirection: "row",
    shadowColor: "#000",
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 16.0,
    borderRadius: 25,
  },

  appButtonContainer: {
    backgroundColor: "#009688",
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "50%",
    height: 30,
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  image: {
    width: 120,
    height: 90,
    // margin: 10,
    borderRadius: 25,
    backgroundColor: "gray",
  },

  action_view: {
    borderWidth: 1,
    margin: 10,
    overflow: 'hidden',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    flex: 1,
    flexDirection: "row",
  },

  action_view1: {
    // flex: 1,
    alignItems: "center",
  },
  action_view2: {
    flex: 1,
    marginLeft: 5,
  },

  actio_view_text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 3,
    marginBottom: 3,
  },

  actio_view_text2: {
    // fontSize: 10,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 3,
  },

  actio_view_text3: {
    borderRadius: 25,
    marginLeft: 5,
    marginTop: 2,
    marginBottom: 3,
  },
});
