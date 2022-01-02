import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Voicecard({
  labelicon,
  title,
  buttonicon,
  ondeletepress,
  onbuttonpress,
  voicedata,
  playpercentage,
  avatar,
  complete,
  style,
}) {
  const buttonshadow = {
    width: 27,
    height: 27,
    color: "#1170DF",
    border: 10,
    radius: 13.5,
    opacity: 0.15,
    x: 6,
    y: 7,
  };
  const avatarshadow = {
    width: 22,
    height: 22,
    color: "#032B77",
    border: 10,
    radius: 11,
    opacity: 0.15,
    x: 6,
    y: 7,
    style: {
      marginTop: -10,
      marginRight: 10,
    },
  };
  const graphdata = voicedata
    ? voicedata
    : [
        10,
        20,
        35,
        40,
        50,
        100,
        25,
        5,
        25,
        35,
        86,
        42,
        56,
        97,
        52,
        56,
        99,
        22,
        35,
        33,
        11,
        45,
        76,
        24,
        92,
        61,
      ];
  const playedtoindex = playpercentage
    ? (playpercentage * graphdata.length) / 100
    : 0;
  return (
    <View
      style={[
        styles.card,
        !complete ? { backgroundColor: "rgba(171,183,208,0.1)" } : {},
        style,
      ]}
    >
      <View style={styles.cardtop}>
        <View style={styles.title}>
          <Image style={styles.labelicon} source={labelicon} />
          <Text style={styles.titletext}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ondeletepress();
          }}
        >
          <Image
            style={styles.buttondelete}
            source={require("./../assets/icons/delete_red.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: -10 }]}
          onPress={() => {
            onbuttonpress();
          }}
        >
          <BoxShadow setting={buttonshadow}>
            <LinearGradient
              style={[
                styles.buttonstyle,
                Platform.OS == "ios"
                  ? { width: 40, height: 40, borderRadius: 30 }
                  : {},
              ]}
              start={{ x: 0.795, y: 0.918 }}
              end={{ x: -0.483, y: -0.925 }}
              colors={["#1170df", "#1170df", "#f12874"]}
              locations={[0, 0.231, 1]}
            >
              <Image style={styles.buttonicon} source={buttonicon} />
            </LinearGradient>
          </BoxShadow>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View>
          <BoxShadow setting={avatarshadow}>
            <Image style={styles.avatar} source={avatar} />
          </BoxShadow>
        </View>
        <View style={styles.voice}>
          <View style={styles.graph}>
            {graphdata.map((data, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.line,
                    { height: (data * 40) / 100 },
                    index <= playedtoindex ? styles.lineover : {},
                  ]}
                ></View>
              );
            })}
          </View>
          <View style={styles.voiceoverlayleft}>
            <LinearGradient
              style={styles.voiceoverlay}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0.5 }}
              colors={
                !complete
                  ? ["rgba(255,255,255,0)", "rgba(171,183,208,0.1)"]
                  : ["rgba(255,255,255,0)", "#fff"]
              }
              locations={[0, 1]}
            />
          </View>
          <View style={styles.voiceoverlayright}>
            <LinearGradient
              style={styles.voiceoverlay}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 0.5 }}
              colors={
                !complete
                  ? ["rgba(171,183,208,0.1)", "rgba(255,255,255,0)"]
                  : ["#fff", "rgba(255,255,255,0)"]
              }
              locations={[0, 1]}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 16,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titletext: {
    color: "#ABB7D0",
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 20,
    marginTop: -3,
  },
  cardtop: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonstyle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 32,
  },
  voice: {
    flex: 1,
    height: 40,
  },
  voiceoverlay: {
    width: 61,
    height: 40,
  },
  voiceoverlayright: {
    position: "absolute",
    right: 0,
  },
  voiceoverlayleft: {
    position: "absolute",
    left: 0,
  },
  graph: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  line: {
    width: 3,
    height: 40,
    borderRadius: 3,
    backgroundColor: "rgba(171,183,208,0.31)",
  },
  lineover: {
    backgroundColor: "#1170DF",
  },
  labelicon: {
    width: 16,
    height: 13,
    resizeMode: "contain",
  },
  buttondelete: {
    width: 16,
    height: 17,
    resizeMode: "contain",
  },
  buttonicon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
});
