import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

interface NavigationProps {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Navigation = ({ index, setIndex }: NavigationProps) => {
  return (
    <View style={{ ...styles.container }}>
      {index === 0 ? (
        <>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </TouchableOpacity>
          <View style={{ ...styles.navigationText }}>
            <Text style={{ color: "white" }}>DISCOVERY</Text>
          </View>
          <TouchableOpacity onPress={() => setIndex(1)}>
            {/* <Text>NEWS</Text> */}
            <AntDesign name="right" size={24} color="#007FFF" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => setIndex(0)}>
            <AntDesign name="left" size={24} color="#007FFF" />
          </TouchableOpacity>
          <View style={{ ...styles.navigationText }}>
            <Text style={{ color: "white" }}>NEWS</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ios-refresh" size={24} color="#007FFF" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    // borderBottomColor: "black",
    // borderBottomWidth: 1,
  },
  navigationText: {
    // color: "white",
    paddingBottom: 8,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 4,
    borderRadius: 8,
    // fontSize: 16,
    // fontWeight: "700",
  },
});
