import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={style.container}>
      <Text>Home</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});
