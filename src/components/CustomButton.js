import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CB8589',
        width: '100%',

        padding: 15,
        marginVertical: 10,
        borderRadius: 100,
        alignItems: 'center',

        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default CustomButton