import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Article } from "../contexts";

interface NewsCardProps {
  item: Article;
  index: number;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NewsCard = ({ index, item }: NewsCardProps) => {
  //   console.log(item.urlToImage);
  return (
    <View style={{ ...styles.container }}>
      <Image
        style={{ ...styles.image }}
        resizeMode="cover"
        source={{
          uri: item.urlToImage,
          width: windowWidth,
          height: windowHeight / 3,
        }}
      />
      <View style={{ ...styles.content }}>
        <Text style={{ ...styles.title, fontSize: 24, fontWeight: "700" }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.title, fontSize: 20, marginTop: 16 }}>
          {item.description}
        </Text>
        <Text style={{ ...styles.title, fontSize: 16, marginTop: 16 }}>
          Shot by: {item.author ?? "unknown"}
        </Text>
        <ImageBackground
          style={{ ...styles.footer }}
          blurRadius={30}
          source={{
            uri: item.urlToImage,
            width: windowWidth,
            height: windowHeight / 4,
          }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ ...styles.title }}>
              '{item.content?.slice(0, 45)}...'
            </Text>
            <Text style={{ ...styles.title }}>Read More...</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 8,
    backgroundColor: "grey",
    width: windowWidth,
    borderRadius: 16,
    overflow: "hidden",
    height: windowHeight / 1.3,
    // flex: 1,
    // height: windowHeight / 1.3,
    // marginBottom: 16,
  },
  content: {
    flex: 1,
    padding: 16,
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  image: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    // resizeMode: "cover",
  },
  title: {
    color: "white",
  },
  footer: {
    height: 70,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
