import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { useNews } from "../contexts/News";
import Carousel from "react-native-snap-carousel";
import NewsCard from "../components/NewsCard";

const NewsScreen = () => {
  const { news } = useNews();
  const [activeIndex, setActiveIndex] = useState(0);

  const screenWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={{ ...styles.container }}>
      {news ? (
        <Carousel
          layout="stack"
          data={news.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <NewsCard item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      ) : null}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
