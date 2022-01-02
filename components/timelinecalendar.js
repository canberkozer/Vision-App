import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Progressbar from "./progressbar";
import { BoxShadow } from "react-native-shadow";
export default function TimeLineCalendar({
  id,
  title,
  image,
  onpress,
  precent,
  backgroundColor,
  boxwidth,
  style,
}) {
  const width = boxwidth ? boxwidth : 149;
  const pictureshadow = {
    width: 14,
    height: 14,
    color: "#032B77",
    border: 20,
    radius: 7,
    opacity: 0.25,
    x: 6,
    y: 10,
    style: {
      marginTop: -20,
      marginRight: 20,
    },
  };
  const timelineshadow = {
    width: width - 20,
    height: 28,
    color: backgroundColor ? backgroundColor : "#F12874",
    border: 20,
    radius: 12,
    opacity: 0.2,
    x: 10,
    y: 15,
    style: {
      marginRight: 20,
    },
  };
  return (
    <View style={style}>
      <TouchableOpacity
        style={[styles.timelinepress, { width: width }]}
        onPress={() => {
          onpress(id);
        }}
      >
        <BoxShadow setting={timelineshadow}>
          <View
            style={[
              styles.timeline,
              {
                backgroundColor: backgroundColor ? backgroundColor : "#F12874",
                width: width,
              },
            ]}
          >
            <BoxShadow setting={pictureshadow}>
              <Image source={image} style={styles.picture} />
            </BoxShadow>
            <Text style={styles.title}>{title}</Text>
            <Progressbar
              size={35}
              strokeWidth={3}
              progressPercent={precent}
              progressRemainSpace={14}
              progressRemainPlace={65}
              pgColor="#FFFFFF"
              bgColor="rgba(255,255,255,0.3)"
              textSize={10}
            />
          </View>
        </BoxShadow>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  timeline: {
    width: 172,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F12874",
    paddingHorizontal: 9,
    alignItems: "center",
    flexDirection: "row",
  },
  timelinepress: {
    width: 172,
    height: 48,
  },
  picture: {
    width: 34,
    height: 34,
    borderRadius: 18,
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#fff",
    textAlign: "center",
  },
});
