import { View, StyleSheet, Text } from "react-native";
import { theme } from "@/theme";

export default function Messages() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Messages</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});
