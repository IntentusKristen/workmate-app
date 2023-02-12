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
import ConvoImg from "../../assets/img/ConvoImg.png";

const SignInScreen = () => {
  // useStates for sign in credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // button behaviour functions
  const onSignInPressed = () => {};
  const onSignUpPressed = () => {};
  const onForgotPassword= () => {};

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
        <Text style={{top: '-27%', fontFamily: 'Montserrat-Regular',}}>Unleash your potential</Text>
        <Image
            source={ConvoImg}
            resizeMode= 'contain'
            style={[styles.logo, { top: '-40%'}]}
        />
      </View>
      <View style={styles.bottom} >
        <Text style={{fontWeight: 'bold', right: '34%', marginBottom: '5%', fontFamily: 'Montserrat-Medium',}}>Hi there!</Text>
        <Text style={{right: '34%', fontFamily: 'Montserrat-Regular',}}>Email</Text>
        <CustomInput
          placeholder="Your Email"
          value={email}
          setValue={setEmail}
          style={{marginBottom: 50,}}
        />
        <Text style={{right: '30%', marginTop: 5, fontFamily: 'Montserrat-Regular',}}>Password</Text>
        <CustomInput
          placeholder="Your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={{marginTop: 30, width: '50%'}}>
        <CustomButton
          text="Login"
          onPress={onSignInPressed}
        />
        </View>

        <View style={styles.prompt}>
        <CustomButton text='Forgot Password?' type='textButton' onPress={onForgotPassword}></CustomButton>
        <Text style={{fontFamily: 'Montserrat-Regular',}}>
          Don't have an account? <CustomButton text='Sign Up' type='textButton' onPress={onSignUpPressed}></CustomButton>
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
    height: '35%',
    padding: 20,
  },
  bottom: {
    backgroundColor: 'white',
    alignItems: "center",
    borderRadius: 20,
    height: '65%',
    paddingVertical: '10%',
    marginTop: 5,

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
});

export default SignInScreen;
