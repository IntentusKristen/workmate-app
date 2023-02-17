import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "" }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container_: {
    backgroundColor: "#CB8589",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 100,
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text_: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
  },
  container_textButton: {
    marginVertical: -1,
    alignItems: "center",
  },
  text_textButton: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontFamily: "Montserrat-Medium",
  },
});

export default CustomButton;
