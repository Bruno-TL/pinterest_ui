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

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/logo.png")}
        style={[styles.logo, logoAnimatedStyles]}
      />
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
});
