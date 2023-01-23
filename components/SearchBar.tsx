import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNews } from "../contexts/News";
import { Article } from "../contexts";

const SearchBar = () => {
  const { news } = useNews();

  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      setSearchResults([]);
    } else {
      setSearchResults(news.filter((q) => q.title.includes(text)));
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <TextInput
        style={{ ...styles.search }}
        placeholder="Search for a news"
        placeholderTextColor={"grey"}
        onChangeText={(text) => handleSearch(text)}
      />
      <View style={{ ...styles.results }}>
        {searchResults.slice(0, 10).map((result) => (
          <TouchableOpacity key={result.urlToImage}>
            <Text style={{ ...styles.singleResult }}>{result.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  search: {
    margin: 8,
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    color: "white",
  },
  results: {
    position: "absolute",
    top: 60,
    zIndex: 1,
  },
  singleResult: {
    marginHorizontal: 8,
    borderRadius: 16,
    shadowColor: "black",
    elevation: 8,
    padding: 8,
    backgroundColor: "black",
    color: "white",
  },
});
