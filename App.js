import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/Welcome';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import SignInScreen from './src/screens/SignInScreen';
import Navigation from './src/components/Navigation';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf')
      });
      setFontLoaded(true);
    }
  
    loadFont();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading font...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
