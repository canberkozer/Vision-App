import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
export default function Topbar4({
  title,
  icon,
  onbackiconPress,
  onsearchPress,
  backgroundcolor,
  style,
}) {
  return (
    <View style={[styles.topbar, style]}>
      <View style={styles.topbaraction}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            onbackiconPress();
          }}
        >
          <Image
            style={styles.backicon}
            source={require("./../assets/icons/arrowback_blue.png")}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Image style={styles.titleicon} source={icon} />
          <Text style={styles.titletext}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            onsearchPress();
          }}
        >
          <Image
            style={styles.searchicon}
            source={require("./../assets/icons/searchicon.png")}
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
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
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
  backicon: {
    width: 6,
    height: 12,
    resizeMode: "contain",
  },
  searchicon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  titleicon: {
    width: 30,
    height: 40,
    resizeMode: "contain",
  },
});
