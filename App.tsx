import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import NewsTab from "./components/NewsTab";
import News from "./contexts/News";

function App() {
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <NewsTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default () => {
  return (
    <News>
      <App />
    </News>
  );
};
