import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

const SignUpScreen = () => {
  // useStates for sign in credentials
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // useForm
  const { watch } = useForm();

  // watches for when password gets assigned a value
  const pwd = watch("password");

  // email regex to confirm valid email
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSignUpPressed = async (data) => {
    // first check if sign in is already loading
    if (loading) {
      // stop execution
      return;
    }

    // else set loading to true
    setLoading(true);

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
          phone_number: phoneNumber,
        },
      });
      navigation.navigate("ConfirmEmail");
    } catch (e) {
      Alert.alert("Error", e.message);
    }
    setLoading(false);
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    // page with terms of use
  };

  const onPrivacyPolicyPressed = () => {
    // page with privacy policy
  };

  // get height of screen to set logo to 30% of screen
  const { height } = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.top}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={[styles.logo, { height: height * 0.3 }]}
        />
        <Text style={{ top: "-7%", fontFamily: "Montserrat-Regular" }}>
          Unleash your potential
        </Text>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            rules={{
              required: "First Name is required",
            }}
          />
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            rules={{
              required: "Last Name is required",
            }}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            placeholder="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
            rules={{
              required: "Phone Number is required",
            }}
          />
          <CustomInput
            placeholder="Your Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />
          <CustomInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
            rules={{
              required: "Confirm Password is required",
              validate: (value) => value == pwd || "Passwords must match",
            }}
          />
        </View>
        <View style={{ width: "50%" }}>
          <CustomButton
            text={loading ? "Signing Up..." : "Sign Up"}
            onPress={onSignUpPressed}
          />
        </View>

        <View>
          <Text style={styles.text}>
            By registering you confirm that you accept our
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              {" "}
              Terms of Use
            </Text>{" "}
            and
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
              {" "}
              Privacy policy
            </Text>
            .
          </Text>
        </View>

        <View style={styles.prompt}>
          <Text style={{ fontFamily: "Montserrat-Regular" }}>
            Have an account?{" "}
            <CustomButton
              text="Sign In"
              type="textButton"
              onPress={onSignInPressed}
            ></CustomButton>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#B0D0D3",
    alignItems: "center",
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  logo: {
    maxWidth: 300,
    width: "70%",
    maxHeight: 200,
    marginTop: 20,
    position: "block",
    top: 0,
  },
  prompt: {
    position: "absolute",
    bottom: 0,
    paddingBottom: "25%",
  },
  signUpText: {
    fontFamily: "Montserrat-Bold",
    marginBottom: 10,
    fontSize: 18,
  },
  text: {
    color: "grey",
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    paddingTop: 10,
  },
  link: {
    color: "yellow",
    textAlign: "center",
  },
  signUpContainer: {
    top: "-3%",
    alignItems: "center",
    width: "100%",
  },
});

export default SignUpScreen;
