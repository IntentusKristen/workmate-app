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
import Logo from "../../assets/img/Logo.png";
import CustomInput from "../components/CustomInput.js";
import CustomButton from "../components/CustomButton";
import ConvoImg from "../../assets/img/ConvoImg.png";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  // useStates for sign in credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // create useState to mark whether it's already loading/trying to sign in
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // email regex to confirm valid email
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // button behaviour functions
  const onSignInPressed = async data => {
    // first check if sign in is already loading
    if (loading) {
      // stop execution
      return;
    }

    // else set loading to true
    setLoading(true);

    try {
      // try to get sign in details
      const response = await Auth.signIn(data.email, data.password);
    } catch(e) {
      // if doesn't work display message
      Alert.alert("Error", e.message);
    }
    setLoading(false);
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp")
  };
  const onForgotPassword= () => {
    navigation.navigate("ForgotPassword")
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
        <Text style={{top: '-27%', fontFamily: 'Montserrat-Regular',}}>Unleash your potential</Text>
        <Image
            source={ConvoImg}
            resizeMode= 'contain'
            style={[styles.logo, { top: '-40%'}]}
        />
      </View>
      <View style={styles.bottom} >
        <Text style={{right: '34%', marginBottom: '5%', fontFamily: 'Montserrat-Bold',}}>Hi there!</Text>
        <Text style={{right: '34%', fontFamily: 'Montserrat-Regular',}}>Email</Text>
        <CustomInput
          placeholder="Your Email"
          value={email}
          setValue={setEmail}
          style={{marginBottom: 50,}}
          control= {control}
          rules={{
            required: "Email is required",
            pattern: {value: EMAIL_REGEX, message: "Email is invalid"}
          }}
        />
        <Text style={{right: '30%', marginTop: 5, fontFamily: 'Montserrat-Regular',}}>Password</Text>
        <CustomInput
          placeholder="Your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
          control= {control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long"
            }
          }}
        />
        <View style={{marginTop: 30, width: '50%'}}>
        <CustomButton
          text={loading ? "Loading..." : "Login"}
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
