import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Stickynote({
  id,
  icon,
  label,
  data,
  color,
  onpress,
  style,
}) {
  const colors = {
    green: ["#52e3b1", "#032b77"],
    blue: ["#5499ea", "#032b77"],
    yellow: ["#ffd90a", "#fff2aa"],
    purple: ["#f12874", "#032b77"],
  };
  const renderColor = (color) => {
    switch (color) {
      case "blue":
        return colors.blue;
      case "yellow":
        return colors.yellow;
      case "purple":
        return colors.purple;
      default:
        return colors.green;
    }
  };
  return (
    <View style={[styles.note, style]}>
      <TouchableOpacity
        onPress={() => {
          onpress(id);
        }}
      >
        <LinearGradient
          style={styles.notecolor}
          start={{ x: 0.157, y: 0.072 }}
          end={{ x: 1.708, y: 2.299 }}
          colors={renderColor(color)}
          locations={[0, 1]}
        >
          <Image style={styles.icon} source={icon} />
          <Text style={styles.data}>{data}</Text>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.bottom}>
            <LinearGradient
              style={styles.bottom}
              start={{ x: 0.136, y: -0.171 }}
              end={{ x: 0.637, y: 0.934 }}
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.584)"]}
              locations={[0, 1]}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  note: {
    width: 46,
    height: 78,
    borderRadius: 10,
    borderBottomRightRadius: 15,
  },
  notecolor: {
    width: 46,
    height: 78,
    borderRadius: 10,
    borderBottomRightRadius: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 0,
    resizeMode: "contain",
  },
  data: {
    fontSize: 14,
    fontFamily: "BarlowCondensed-Bold",
    color: "white",
  },
  label: {
    fontSize: 14,
    fontFamily: "BarlowCondensed-Medium",
    color: "white",
    opacity: 0.7,
  },
  bottom: {
    width: 11,
    height: 11,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 25,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
