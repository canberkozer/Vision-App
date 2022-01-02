import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
export default function Buttongroup({
  label,
  color,
  icon,
  onPress,
  id,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(id);
      }}
      style={[styles.button, { backgroundColor: color }, style]}
    >
      <Image style={styles.icon} source={icon} />
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#1170DF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginHorizontal: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#fff",
    marginTop: 15,
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
