import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";

const SignUpScreen = () => {
  // useStates for sign in credentials
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // button behaviour functions
  const onSignUpPressed = () => {};
  const onSignInPressed = () => {};

  // get height of screen to set logo to 30% of screen
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={[styles.logo, { height: height * 0.3 }]}
        />
        <Text style={{top: '-8%'}}>Unleash your potential</Text>
        <Text style={styles.signUpText}>Sign Up</Text>
        <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setFirstName}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
        
        <CustomInput
          placeholder="Your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <View style={{marginTop: 30, width: '50%'}}>
        <CustomButton
          text="Sign Up"
          onPress={onSignUpPressed}
        />
        </View>

        <View style={styles.prompt}>
        <Text >
          Have an account? <CustomButton text='Sign In' type='textButton' onPress={onSignInPressed}></CustomButton>
        </Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#B0D0D3",
    },
  top: {
    backgroundColor: "#B0D0D3",
    alignItems: 'center',
    height: '100%',
    padding: 20,
  },
  logo: {
    maxWidth: 300,
    width: "70%",
    maxHeight: 200,
    paddingVertical: 0,
    marginVertical: 0,
    position: 'block',
    top: 0
  },
  prompt: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: '25%',
  },
  signUpText: {
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default SignUpScreen;
