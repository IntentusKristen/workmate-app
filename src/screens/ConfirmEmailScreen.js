import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  // useStates for email confirm credentials
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // button behaviour functions
  const onConfirmPressed = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      await Auth.confirmSignUp(email, code);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert();
    }
    setLoading(false);
  };

  const onResendPressed = () => {
    // pop up that says code resent or something
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.top}>
      <Text style={styles.titleText}>Confirm Your Email</Text>
      <CustomInput
        name="email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
        rules={{
          required: "Email is required",
        }}
      />

      <CustomInput
        name="code"
        placeholder="Confirmation Code"
        value={code}
        setValue={setCode}
        rules={{
          required: "Confirmation code is required",
        }}
      />

      <View style={{ marginTop: 20, width: "50%" }}>
        <CustomButton
          text={loading ? "Confirming..." : "Confirm"}
          onPress={onConfirmPressed}
        />
      </View>
      <View style={styles.prompt}>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Regular" }}>
          Didn't get code?{" "}
          <CustomButton
            text="Resend Code"
            type="textButton"
            onPress={onResendPressed}
          ></CustomButton>
        </Text>
        <Text style={{ textAlign: "center", fontFamily: "Montserrat-Regular" }}>
          Back to{" "}
          <CustomButton
            text="Sign In"
            type="textButton"
            onPress={onSignInPressed}
          ></CustomButton>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#B0D0D3",
    alignItems: "center",
    flex: 1,
    paddingTop: "65%",
  },
  logo: {
    maxWidth: 300,
    width: "70%",
    maxHeight: 200,
    paddingVertical: 0,
    marginVertical: 0,
    position: "block",
    top: 0,
  },
  prompt: {
    position: "absolute",
    bottom: 0,
    paddingBottom: "25%",
  },
  titleText: {
    marginBottom: 20,
    fontFamily: "Montserrat-Bold",
    fontSize: 18,
  },
});

export default ConfirmEmailScreen;
