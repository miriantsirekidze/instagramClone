import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Stories = ({ imagePath, name }) => {

  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10}}>
        <LinearGradient
          colors={["#CA1D7E", "#E35157", "#F2703F", "#52b"]}
          locations={[0.1, 0.3, 0.5, 0.9]}
          style={styles.gradientStyle}
        >
          <Image source={imagePath} style={styles.image} />
        </LinearGradient>
        <Text style={styles.text}>
          {name.length > 11 ? name.slice(0, 10) + "..." : name}
        </Text>
      </View>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#000000",
  },
  gradientStyle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 12,
    fontWeight: '400'
  },
});
