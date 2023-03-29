import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { theme } from "../../styles/theme";

interface IButton {
  gradient?: boolean;
  title: string;
  styles: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export const Button: FC<IButton> = ({ gradient, title, styles, onPress }) => {
  return gradient ? (
    <LinearGradient
      colors={["#92A3FD", "#9DCEFF"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={[styles, { borderRadius: 99 }]}
    >
      <TouchableOpacity
        style={{ padding: 18, width: "100%" }}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Text style={buttonStyles.text}>I am a button</Text>
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <TouchableOpacity style={styles} onPress={onPress} activeOpacity={0.5}>
      <Text style={[buttonStyles.text, { color: "#000" }]}>{title}</Text>
    </TouchableOpacity>
  );
};
const buttonStyles = StyleSheet.create({
  text: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    ...theme.text.size.m,
    fontFamily: theme.text.basicFontFamily,
  },
});
