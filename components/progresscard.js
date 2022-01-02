import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Progresscard({
  icon,
  title,
  progress,
  total,
  onpress,
  style,
}) {
  const [boxwidth, setboxwidth] = useState(0);
  const progresshadow = {
    width: boxwidth ? (progress * boxwidth) / total - 4 : 76,
    height: 0,
    color: "#1170DF",
    border: 4,
    radius: 0,
    opacity: 0.2,
    x: 6,
    y: 3,
  };
  return (
    <View
      style={[styles.progresscard, style]}
      onLayout={(event) => {
        var { width } = event.nativeEvent.layout;
        setboxwidth(width);
      }}
    >
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          onpress();
        }}
      >
        <View style={styles.label}>
          <View style={styles.progresscardtitle}>
            <Image style={styles.progresscardicon} source={icon} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.progresslabel}>
            <Text style={styles.precentage}>{progress}</Text>
            <Text style={styles.total}>/ {total}</Text>
          </View>
        </View>
        <View style={styles.progress}>
          <BoxShadow setting={progresshadow}>
            <LinearGradient
              style={[
                styles.progressbar,
                progress && boxwidth
                  ? [{ width: (progress * boxwidth) / total }]
                  : {},
              ]}
              start={{ x: 1.375, y: 6.253 }}
              end={{ x: -0.037, y: 1 }}
              colors={["#f12874", "#ee2976", "#6a53b5", "#1170df"]}
              locations={[0, 0.209, 0.379, 1]}
            ></LinearGradient>
          </BoxShadow>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  progresscard: {
    height: 42,
    justifyContent: "center",
    paddingVertical: 5,
  },
  title: {
    color: "#ABB7D0",
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 10,
  },
  label: {
    flexDirection: "row",
    marginBottom: 10,
  },
  progresscardtitle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  progresslabel: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  precentage: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#032B77",
    fontFamily: "BarlowCondensed-Bold",
  },
  total: {
    fontSize: 12,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 3,
  },
  progress: {
    width: "100%",
    height: 3,
    marginBottom: 4,
    backgroundColor: "#fff",
  },
  progressbar: {
    width: "100%",
    height: 3,
    borderRadius: 16,
  },
  progresscardicon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
