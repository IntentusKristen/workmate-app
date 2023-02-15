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
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  // useStates for sign in credentials
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  // button behaviour functions
  const onSignUpPressed = () => {
    navigation.navigate("ConfirmEmail")
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn")
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
    <View style={styles.root}>
      <View style={styles.top}>
      
        <Image
          source={Logo}
          resizeMode="contain"
          style={[styles.logo, { height: height * 0.3 }]}
        />
        <Text style={{top: '-7%', fontFamily: 'Montserrat-Regular'}}>Unleash your potential</Text>

        <View style={styles.signUpContainer}>
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
          secureTextEntry={true}
        />
        </View>
        <View style={{width: '50%'}}>
        <CustomButton
          text="Sign Up"
          onPress={onSignUpPressed}
        />
        </View>

        <View >
        <Text style={styles.text}>By registering you confirm that you accept our 
          <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and 
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy policy</Text>.
        </Text>
        </View>

        <View style={styles.prompt}>
        <Text style={{fontFamily: 'Montserrat-Regular'}}>
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
    paddingTop: 20
    
  },
  logo: {
    maxWidth: 300,
    width: "70%",
    maxHeight: 200,
    marginTop: 20,
    position: 'block',
    top: 0
  },
  prompt: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: '25%',
  },
  signUpText: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    fontSize: 18
  },
  text: {
    color: 'grey',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    paddingTop: 10

  },
  link: {
    color:'yellow',
    textAlign: 'center'
  },
  signUpContainer: {
    top: '-3%',
    alignItems: 'center',
    width: '100%'
  }
});

export default SignUpScreen;
