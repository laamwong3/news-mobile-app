import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import NewsScreen from "../screens/NewsScreen";
import Navigation from "./Navigation";
import { useNews } from "../contexts/News";

const NewsTab = () => {
  const layout = useWindowDimensions();
  const { index, setIndex } = useNews();
  const [routes] = useState([
    {
      key: "first",
      title: "Discovery",
    },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoveryScreen,
    second: NewsScreen,
  });

  const NavigationProps = {
    index,
    setIndex,
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <Navigation {...NavigationProps} />}
      //   tabBarPosition={"bottom"}
    />
  );
};

export default NewsTab;

const styles = StyleSheet.create({});
