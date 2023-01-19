import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: 16,
    // marginTop: StatusBar.currentHeight,
  },
  text: {
    marginTop: 16,
  },
});
