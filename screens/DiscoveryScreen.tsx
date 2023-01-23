import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../constants/newsApi";
import { useWindowDimensions } from "react-native";
import { useNews } from "../contexts/News";
import SearchBar from "../components/SearchBar";

const DiscoveryScreen = () => {
  const { width: windowWidth } = useWindowDimensions();
  const { setCategory, setSource } = useNews();

  return (
    <View style={{ ...styles.container }}>
      {/* <SearchBar /> */}

      <Text style={{ ...styles.text, marginVertical: 24, fontSize: 24 }}>
        Categories
      </Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setCategory(item.name)}>
            <Image
              source={{
                uri: item.pic,
                width: windowWidth / 3,
                height: windowWidth / 3,
              }}
            />
            <Text style={{ ...styles.text }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={windowWidth / 3}
        activeSlideAlignment={"center"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.1}
      />
      <Text style={{ ...styles.text, fontSize: 24, marginVertical: 24 }}>
        Sources
      </Text>
      <View style={{ ...styles.source }}>
        {sources.map((source) => (
          <TouchableOpacity
            onPress={() => {
              setSource(source.id);
            }}
          >
            <Image
              style={{
                ...styles.image,
              }}
              source={{
                uri: source.pic,
                width: windowWidth / 3,
                height: windowWidth / 3,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
    textAlign: "center",
  },
  source: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    // padding: 16,
    // gap: 16,
  },
  image: {
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 1,
  },
});
