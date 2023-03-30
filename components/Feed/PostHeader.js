import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";


const PostHeader = ({imagePath, name, profile}) => {
  const {height} = Image.resolveAssetSource(imagePath);
  const size = height / 3.5

  return (
    <View style={{ marginTop: 10 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", width: '75%'}}>
          <Image source={profile} style={styles.profile} />
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </Pressable>
          <View style={{ margin: 15 }}>
            <Text style={styles.threeDots}>...</Text>
          </View>
        </View>
      </View>
      <Image source={imagePath} style={[styles.image, {height: size}]} />
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  name: {
    color: "#FFFFFF",
    alignSelf: "center",
    marginLeft: 10,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 70,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  threeDots: {
    transform: [{ rotate: "90deg" }],
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
