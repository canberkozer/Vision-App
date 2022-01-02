import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
export default function Topbar2({
  title,
  label,
  labelicon,
  onbackiconPress,
  onstarPress,
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
          <View style={styles.label}>
            <Image
              style={styles.labelicon}
              source={labelicon}
            />
            <Text style={styles.labeltext}>{label}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            onstarPress();
          }}
        >
          <Image
            style={styles.staricon}
            source={require("./../assets/icons/starblue.png")}
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
  staricon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  label: {
    flexDirection: "row",
    opacity: 0.6,
  },
  labelicon: {
    width: 16,
    height: 21,
    resizeMode: "contain",
  },
  labeltext: {
    fontSize: 16,
    color: "#032B77",
    fontFamily: "BarlowCondensed-Regular",
  },
});
