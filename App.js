import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
import * as firebase from "firebase";

//Ignoring warnings for long timer issue
// YellowBox.ignoreWarnings(["Setting a timer"]);

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyDB2O8iJimHO-GTcXgocxDhNyZs6dFONts",
  authDomain: "fir-realtime-database-5d012.firebaseapp.com",
  databaseURL: "https://fir-realtime-database-5d012.firebaseio.com",
  storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

database
  .ref("/users/001")
  .set({
    name: "Krishna",
    age: 24,
  })
  .then(() => {
    console.log("Inserted");
  })
  .catch((error) => {
    console.log(error);
  });

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{"Hey"}</Text>
      <StatusBar style="auto" />
    </View>
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
