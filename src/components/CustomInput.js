import { Text, View, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
      <View style={styles.container}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry} />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "85%",

        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 100,

        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 5
    },
    input: {},
})

export default CustomInput