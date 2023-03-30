import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const StoryPfp = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../img/pfp.png")} style={styles.image} />
      <View style={styles.positionContainer}>
        <View style={styles.plusContainer}>
          <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.plus}>+</Text>
        </View>
      </View>
      <Text style={styles.text}>Your story</Text>
    </View>
  );
};

export default StoryPfp;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#000000",
  },
  plusContainer: {
    height: 22,
    width: 22,
    borderRadius: 11,
    backgroundColor: "#1DA1F2",
    borderWidth: 2,
    borderColor: "#000000",
    flex: 1
  },
  plus: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: 'center',
    textAlignVertical: "center",
    textAlign: "center",
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: '400'
  },
  positionContainer: {
    position: "absolute",
    marginLeft: 50,
    marginTop: 45,
  },
});
