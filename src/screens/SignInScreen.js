import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Logo from '../../assets/img/Logo.png'

const SignInScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Logo} resizeMode='contain' style={styles.logo}/>
      <Text>Unlease your potential</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        // width won't change width for some reason
        maxWidth: '70%',
        height: 250,
    }
})

export default SignInScreen