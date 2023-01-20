import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import NewsTab from "./components/NewsTab";

export default function App() {
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
