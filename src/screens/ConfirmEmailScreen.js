import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ConfirmEmailScreen = () => {
  // useStates for email confirm credentials
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const route = useRoute();
  // automatically fill email from input in sign up screen
  const {control, handleSubmit} = useForm({defaultValues: {username: route?.params?.username}})

  const navigation = useNavigation();

  // button behaviour functions
  const onConfirmPressed = async data => {
    try{
      const response = await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate("");
    }catch(e) {
      Alert.alert()
    }
    navigation.navigate("SignIn");
  };

  const onResendPressed = () => {
    // pop up that says code resent or something
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn")
  };

  // get height of screen to set logo to 30% of screen
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View style={styles.top}>

        <Text style={styles.titleText}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
          rules={{
            required: "Email is required"
          }}
        />

        <CustomInput
          placeholder="Confirmation Code"
          value={code}
          setValue={setCode}
          rules={{
            required: "Confirmation code is required"
          }}
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
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
});

export default ConfirmEmailScreen;
