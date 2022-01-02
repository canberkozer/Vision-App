import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
export default function Topbar3({
  title,
  onmenuPress,
  onuserPress,
  backgroundcolor,
  style,
}) {
  return (
    <View style={[styles.topbar, style]}>
      <View style={styles.topbaraction}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            onmenuPress();
          }}
        >
          <Image
            style={styles.menuicon}
            source={require("./../assets/icons/menuicon.png")}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.titletext}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            onuserPress();
          }}
        >
          <Image
            style={styles.usericon}
            source={require("./../assets/icons/single-user-minus.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.bottomstyle,
          backgroundcolor ? { backgroundColor: backgroundcolor } : {},
        ]}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "#f3f6fb",
    height: 143,
    borderRadius: 26,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  topbaraction: {
    height: 110,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
  },
  titletext: {
    fontSize: 30,
    color: "#032B77",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  buttons: {
    padding: 15,
  },
  bottomstyle: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
  },
  menuicon: {
    width: 8,
    height: 10,
    resizeMode: "contain",
  },
  usericon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
