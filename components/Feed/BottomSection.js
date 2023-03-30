import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const BottomSection = ({ like, name, description, comments, time }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 5, 
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.container}>
          <Image
            source={require("../../img/icons/like.png")}
            style={styles.button}
          />
          <Image
            source={require("../../img/icons/comment.png")}
            style={styles.button}
          />
          <Image
            source={require("../../img/icons/send.png")}
            style={styles.button}
          />
        </View>

        <View>
          <Image
            source={require("../../img/icons/bookmark.png")}
            style={styles.button}
          />
        </View>
      </View>
      <View style={{marginLeft: 15}}>
        <Text style={styles.nameAndLikes}>{like} likes</Text>
        <Text style={styles.nameAndLikes}>{name} <Text style={styles.description}>{description}</Text></Text>
        <Text style={styles.comments}>View all {comments} comments</Text>
        <Text style={styles.time}>{time} ago</Text>
      </View>
    </View>
  );
};

export default BottomSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
  button: {
    height: 30,
    width: 30,
    marginLeft: 10
  },
  nameAndLikes: {
    color: '#FFFFFF', 
    fontWeight: '700', 
    fontSize: 15,
    marginTop: 2
  },
  description: {
    fontSize: 15.5,
    color: '#FFFFFF',
    fontWeight: '400'
  },
  comments: {
    color: 'grey',
    fontSize: 15.5,
    fontWeight: '400',
    marginTop: 2
  },
  time: {
    fontSize: 12.5,
    color: 'grey'
  }
});
