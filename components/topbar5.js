import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
export default function Topbar5({
  title,
  onbackiconPress,
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
          <Text style={styles.titletext}>{title}</Text>
        </View>
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
    height: 246,
    borderRadius: 26,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  topbaraction: {
    height: 213,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 37,
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
});
