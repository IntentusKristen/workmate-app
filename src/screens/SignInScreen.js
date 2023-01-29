import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/img/Logo.png'
import CustomInput from '../components/CustomInput.js'

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // get height of screen to set logo to 30% of screen
    const {height} = useWindowDimensions()
  return (
    <View style={styles.root}>
      <Image source={Logo} resizeMode='contain' style={[styles.logo, {height: height * 0.3}]}/>
      <Text>Email</Text>
      <CustomInput placeholder='Your Email' value={email} setValue={setEmail} />
      <Text>Password</Text>
      <CustomInput placeholder='Your Password' value={password} setValue={setPassword} secureTextEntry={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#B0D0D3',
    },
    logo: {
        maxWidth: 300,
        width: "70%",
        maxHeight: 200,
        paddingBottom: 0,
        marginBottom: 0,
    },
})

export default SignInScreen