import { Text, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { forwardRef } from "react";
import { MenuProps } from "./menu";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            name="close"
            size={24}
            color={theme.colors.white}
            onPress={onClose}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
      </View>
    </BottomSheet>
  );
});
