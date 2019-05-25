import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function Loader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        This is an animation in React Native
      </Text>
      <LottieView
        source={require("./assets/695-bouncy-mapmaker.json")}
        autoPlay
        loop
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  description: {
    fontSize: 16,
    marginTop: 50
  }
});

export default Loader;
