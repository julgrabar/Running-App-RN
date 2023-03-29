import {
  Alert,
  Pressable,
  View,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { globalStyles } from "./src/styles/global";
import { SignupForm } from "./src/components/forms/SignupForm";
import { theme } from "./src/styles/theme";

let fonts = {
  "Poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Poppins-bold": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
};

export default function App() {
  const [loaded] = Font.useFonts(fonts);

  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={[styles.text, styles.textMedium]}>Hi there,</Text>
      <Text style={[styles.text, styles.textBold]}>Create an account</Text>
      <SignupForm />
    </View>
  );
}

const fontBold = {
  fontFamily: "Poppins-regular",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  text: {
    fontFamily: theme.text.basicFontFamily,
  },
  textMedium: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
  textBold: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "700",
  },
});
