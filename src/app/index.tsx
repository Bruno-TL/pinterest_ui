import { theme } from "@/theme";
import { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);

  const dimensions = useWindowDimensions();

  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value },
    ],
  }));

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if (finished) {
          logoPositionY.value = withSequence(
            withTiming(50),
            withTiming(-dimensions.height, { duration: 400 })
          );
        }
      })
    );
  }

  function boxes(column: "rigth" | "left") {
    const rest = column === "left" ? 0 : 1;
    return Array.from({ length: 20 })
      .filter((_, index) => index % 2 === rest)
      .map((_, index) => {
        const height = index % 2 === (column === "left" ? 0 : 1) ? 200 : 300;
        return (
          <Animated.View
            key={index}
            style={[styles.box, { height }]}
          ></Animated.View>
        );
      });
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/logo.png")}
        style={[styles.logo, logoAnimatedStyles]}
      />
      <View style={styles.boxes}>
        <View style={styles.column}>{boxes("left")}</View>
        <View style={styles.column}>{boxes("rigth")}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 99,
    height: 99,
  },
  box: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: theme.colors.gray[600],
  },
  boxes: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 12,
  },
});
