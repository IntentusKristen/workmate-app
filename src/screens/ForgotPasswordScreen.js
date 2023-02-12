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

const ForgotPasswordScreen = () => {
  // useStates for email confirm credentials
  const [email, setEmail] = useState("");

  // button behaviour functions
  const onSendPressed = () => {};
  const onSignInPressed = () => {};

  // get height of screen to set logo to 30% of screen
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={styles.top}>

        <Text style={styles.titleText}>Reset Your Password</Text>
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        
        <View style={{marginTop: 20, width: '50%'}}>
        <CustomButton
          text="Send"
          onPress={onSendPressed}
        />
        </View>
        <View style={styles.prompt}>
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
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
});

export default ForgotPasswordScreen;
