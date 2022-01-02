import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
export default function Datecard({ title, icon, text, style }) {
  return (
    <View style={[styles.box, style]}>
      <View style={styles.title}>
        <Image style={styles.titleicon} source={icon} />
        <Text style={styles.label}>{title}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    height: 83,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    marginBottom: 8,
    fontSize: 20,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  text: {
    fontSize: 18,
    color: "#032B77",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  titleicon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});
