import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  // useStates for email confirm credentials
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  // button behaviour functions
  const onConfirmPressed = () => {
    navigation.navigate("SignIn")
  };

  const onResendPressed = () => {
    navigation.navigate("ForgotPassword")
  };
  
  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  };

  // get height of screen to set logo to 30% of screen
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={styles.top}>

        <Text style={styles.titleText}>Reset Your Password</Text>
        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Confirm your new password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />
        
        <View style={{marginTop: 20, width: '50%'}}>
        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
        />
        </View>
        <View style={styles.prompt}>
        <Text style= {{textAlign: 'center', fontFamily: 'Montserrat-Regular'}}>
          Didn't get code? <CustomButton text='Resend Code' type='textButton' onPress={onResendPressed}></CustomButton>
        </Text>
        <Text style= {{textAlign: 'center', fontFamily: 'Montserrat-Regular'}}>
          Back to <CustomButton text='Sign In' type='textButton' onPress={onSignInPressed}></CustomButton>
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
    paddingTop: '65%'
    
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
  titleText: {
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
    fontSize: 18
  },
});

export default NewPasswordScreen;
