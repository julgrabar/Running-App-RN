import { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import {
  StyleProp,
  TextInput,
  TextStyle,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { ISignup } from "./SignupForm";

interface IInput {
  errors?: FieldError | undefined;
  control: Control<ISignup>;
  styles: StyleProp<TextStyle>;
  name: "userName" | "email" | "password" | "password2";
  placeholder?: string;
}

export const Input: FC<IInput> = ({
  errors,
  styles,
  placeholder,
  ...props
}) => {
  return (
    <View style={inputStyles.wrapper}>
      {errors?.message && (
        <Text style={inputStyles.warning}>{errors?.message}</Text>
      )}
      <Controller
        {...props}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder || ""}
            style={styles}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    position: "relative",
  },
  warning: {
    fontSize: 10,
    color: "red",
    position: "absolute",
    top: 2,
  },
});
