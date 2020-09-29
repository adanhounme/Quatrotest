import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  Button,
  FlatList,
} from "react-native";

import { data } from "../../const/restau_data";
import Restauitem from "./restau_item";
import { connect } from "react-redux";

const imag = {
  uri:
    "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
};

 function Restau() {
  return (
    <View style={styles.container}>
      <ImageBackground source={imag} style={styles.image}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.main_conten}>
            <TextInput placeholder="Search Karim 24" style={styles.TextInput} />
            <Button title="texte" style={styles.button} onPress={() => {}} />
          </View>
        </View>
      </ImageBackground>

      <View style={{ flex: 2 }}>
        <Text style={styles.title_text}>Pizzas
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Restauitem />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fff",
    flex: 1,
  },

  main_conten: {
    marginTop: 50,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  TextInput: {
    flex: 3,
    marginLeft: 5,

    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    borderColor: "#000",
    borderWidth: 1,
    paddingLeft: 5,
  },

  title_text: {
    marginTop: 20,
    fontSize: 50,
  },

  button: {
    flex: 1,
    width: "10%",
  },
});

// const mapstatprop = ( state ) =>{
//   return state
// }
export default Restau;