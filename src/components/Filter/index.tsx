import { Pressable, PressableProps, Text } from "react-native";
import { FilterProps } from "./filter";
import { styles } from "./style";

export function Filter({
  filter,
  selected,
  ...rest
}: PressableProps & FilterProps) {
  return (
    <Pressable
      style={[styles.pressable, selected && styles.pressableSelected]}
      {...rest}
    >
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  );
}
