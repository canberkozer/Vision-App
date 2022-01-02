import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Task2({
  memberlist,
  title,
  editcount,
  voicecount,
  buttonicon,
  onbuttonpress,
  showbutton,
  style,
}) {
  const dayshadow = {
    width: 22,
    height: 22,
    color: "#1170DF",
    border: 30,
    radius: 10,
    opacity: 0.4,
    x: 25,
    y: 20,
    style: {
      marginTop: 0,
      marginRight: 13,
    },
  };
  return (
    <View style={[styles.task, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.data}>
        <View style={styles.team}>
          {memberlist.slice(0, 4).map((item) => {
            return (
              <Image
                key={item.id}
                style={styles.picture}
                source={item.picture}
              />
            );
          })}
        </View>
        {editcount ? (
          <View style={styles.info}>
            <Image
              style={styles.icons}
              source={require("./../assets/icons/pen-edit2.png")}
            />
            <Text style={styles.text}>{editcount}</Text>
          </View>
        ) : null}
        {voicecount ? (
          <View style={styles.info}>
            <Image
              style={styles.icons}
              source={require("./../assets/icons/voice.png")}
            />
            <Text style={styles.text}>{voicecount}</Text>
          </View>
        ) : null}
      </View>
      {showbutton ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onbuttonpress();
          }}
        >
          <BoxShadow setting={dayshadow}>
            <LinearGradient
              style={styles.buttonstyle}
              start={{ x: 0.392, y: 0 }}
              end={{ x: 0.698, y: 1 }}
              colors={["#add3ff", "#1170df"]}
              locations={[0, 1]}
            >
              <Image style={styles.buttonimg} source={buttonicon} />
            </LinearGradient>
          </BoxShadow>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  task: {
    height: 92,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    color: "#032B77",
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
  },
  button: {
    position: "absolute",
    width: 56,
    height: 56,
    top: -20,
    right: -20,
    transform: [{ rotate: "45deg" }],
  },
  picture: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#fff",
    marginRight: 5,
  },
  icons: {
    width: 14,
    height: 12,
    resizeMode: "contain",
    marginRight: 5,
  },
  data: {
    flexDirection: "row",
  },
  team: {
    flex: 1,
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    color: "#ABB7D0",
    fontSize: 16,
    fontFamily: "BarlowCondensed-Medium",
  },
  buttonstyle: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonimg: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    transform: [{ rotate: "-45deg" }],
  },
});
