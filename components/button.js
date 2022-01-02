import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Button({ title, onbuttonpress, iswhite, style }) {
  const buttonshadow = {
    width: 134,
    height: 18,
    color: "#1170DF",
    border: 30,
    radius: 5,
    opacity: 0.22,
    x: 25,
    y: 20,
    style: {
      marginTop: 0,
      marginRight: 13,
    },
  };
  const buttonshadow_white = {
    width: 134,
    height: 18,
    color: "#ABB7D0",
    border: 30,
    radius: 5,
    opacity: 0.22,
    x: 25,
    y: 20,
    style: {
      marginTop: 0,
      marginRight: 13,
    },
  };
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => {
        onbuttonpress();
      }}
    >
      <BoxShadow setting={iswhite ? buttonshadow_white : buttonshadow}>
        <LinearGradient
          style={styles.buttonstyle}
          start={{ x: 0.094, y: -0.778 }}
          end={{ x: 0.39, y: 1.467 }}
          colors={iswhite ? ["#fff", "#fff"] : ["#add3ff", "#1170df"]}
          locations={[0, 1]}
        >
          <Text
            style={[styles.buttontext, iswhite ? { color: "#032B77" } : {}]}
          >
            {title}
          </Text>
        </LinearGradient>
      </BoxShadow>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 164,
    height: 48,
  },
  buttonstyle: {
    width: 164,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
  },
});
