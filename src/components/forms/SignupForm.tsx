import { useForm } from "react-hook-form";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from "react-native";
import { theme } from "../../styles/theme";
import { Button } from "../Button/Button";
import { Input } from "./Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignup {
  userName: string;
  email: string;
  password: string;
  password2: string;
}

export const SignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(validationSchema),
    reValidateMode: "onChange",
  });
  let onSubmit = (data: ISignup) => console.log(data);
  return (
    <>
      <KeyboardAvoidingView
        style={styles.form}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView style={{ width: "100%" }}>
          <Input
            placeholder="User name"
            control={control}
            styles={styles.input}
            name="userName"
            errors={errors.userName}
          />
          <Input
            placeholder="Password"
            control={control}
            styles={styles.input}
            name="password"
            errors={errors.password}
          />
          <Input
            placeholder="Repeate the password"
            control={control}
            styles={styles.input}
            name="password2"
            errors={errors.password2}
          />
          <Input
            placeholder="Email"
            control={control}
            styles={styles.input}
            name="email"
            errors={errors.email}
          />
        </ScrollView>
        <Button
          gradient
          title="Register"
          styles={[styles.btn]}
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingView>
      <Text style={styles.text}>Already have an account? Login</Text>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: "100%",
    marginTop: 30,
    alignItems: "center",
  },
  input: {
    backgroundColor: theme.forms.inputColor,
    padding: 15,
    width: "100%",
    borderRadius: 14,
  },
  btn: {
    marginTop: 15,
    width: "80%",
  },
  text: {
    marginTop: 15,
  },
  warning: {
    color: "red",
  },
});

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Field is required")
    .max(150, "Username must be less, than 150 characters"),
  password: yup
    .string()
    .required("Field is required")
    .min(9, "Password must be at least 9 characters"),
  password2: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup.string().required("Field is required").email("Enter valid e-mail"),
});
