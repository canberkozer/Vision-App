import React, { useState } from "react";
import { StyleSheet, Image, View, TextInput, Text } from "react-native";
export default function Textinputcmp({
  icon,
  label,
  placeholder,
  onchangetext,
  iswrong,
  validatemessage,
  showvalidate,
  isdisable,
  value,
  style,
}) {
  const [focused, setfocused] = useState(false);
  return (
    <View style={(isdisable ? styles.textinputdisable : null, style)}>
      <View
        style={
          showvalidate
            ? [
                styles.textinput,
                iswrong ? styles.textinputwrong : styles.textinputcorrect,
              ]
            : styles.textinput
        }
      >
        <View style={focused ? styles.iconwob : styles.icon}>
          <Image style={styles.iconsize} source={icon} />
        </View>
        <View style={styles.textbox}>
          <Text style={focused || value ? styles.label : styles.labelhid}>
            {label}
          </Text>
          <TextInput
            style={
              showvalidate
                ? [
                    styles.textinputfield,
                    iswrong
                      ? styles.textinputfieldwrong
                      : styles.textinputfieldcorrect,
                  ]
                : styles.textinputfield
            }
            placeholder={placeholder}
            placeholderTextColor="rgba(3,43,119,0.2)"
            underlineColorAndroid="transparent"
            onFocus={() => setfocused(true)}
            onEndEditing={() => setfocused(false)}
            onChangeText={(input) => onchangetext(input)}
            editable={isdisable ? false : true}
            value={value}
          />
        </View>
      </View>
      {showvalidate ? (
        <View style={styles.message}>
          <Image
            style={styles.messageicon}
            source={
              iswrong
                ? require("./../assets/icons/wrong.png")
                : require("./../assets/icons/correct.png")
            }
          />
          <Text
            style={[styles.messagetext, iswrong ? styles.messagetextwrong : {}]}
          >
            {validatemessage}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  textinput: {
    width: 328,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  textinputdisable: {
    opacity: 0.5,
  },
  textinputcorrect: {
    borderColor: "#52E3B1",
  },
  textinputwrong: {
    borderColor: "#F12874",
  },
  icon: {
    width: 42,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(171,183,208,0.15)",
  },
  iconwob: {
    width: 42,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    flex: 1,
    paddingHorizontal: 13,
  },
  label: {
    fontSize: 14,
    fontFamily: "BarlowCondensed-Medium",
    opacity: 0.2,
    color: "#032B77",
  },
  labelhid: {
    fontSize: 14,
    fontFamily: "BarlowCondensed-Medium",
    opacity: 0.2,
    color: "#032B77",
    height: 0,
  },
  textinputfield: {
    color: "#032B77",
    fontFamily: "BarlowCondensed-SemiBold",
    fontSize: 18,
  },
  textinputfieldcorrect: {
    color: "#52E3B1",
  },
  textinputfieldwrong: {
    color: "#F12874",
  },
  message: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  messagetext: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#52E3B1",
    marginLeft: 10,
  },
  messagetextwrong: {
    color: "#F12874",
  },
  iconsize: {
    width: 14,
    height: 18,
    resizeMode: "contain",
  },
  messageicon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
