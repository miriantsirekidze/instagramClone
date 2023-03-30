import { View } from "react-native";
import { ScrollView } from "react-native";
import React from "react";

import Header from "../components/Header";
import Stories from "../components/Stories";
import StoryPfp from "../components/StoryPfp";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ScrollView
            horizontal={true}
            style={{ flexDirection: "row", marginHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
          >
            <StoryPfp />
            <Stories imagePath={require("../img/story4.jpg")} name={"kvara7"} />
            <Stories
              imagePath={require("../img/story5.jpg")}
              name={"another.cat.post"}
            />
            <Stories
              imagePath={require("../img/story3.jpg")}
              name={"uchiha_madara"}
            />
            <Stories
              imagePath={require("../img/story1.png")}
              name={"roach.exe"}
            />
          </ScrollView>
        </View>
        <Feed/>
      </ScrollView>
    </View>
  );
};

export default Home;
