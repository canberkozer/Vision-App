import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Projectcardsimple({
  id,
  icon,
  title,
  progress,
  total,
  onpress,
  style,
}) {
  const progresshadow = {
    width: progress && total ? (progress * 83) / total - 4 : 76,
    height: 0,
    color: "#1170DF",
    border: 4,
    radius: 0,
    opacity: 0.3,
    x: 6,
    y: 3,
  };
  return (
    <View style={[styles.projectcardsimple, style]}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => {
          onpress(id);
        }}
      >
        <View style={styles.label}>
          <Image style={styles.labelicon} source={icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.projectprogress}>
          <View style={styles.progresslabel}>
            <Text style={styles.precentage}>{progress}</Text>
            <Text style={styles.total}>/ {total}</Text>
          </View>
          <View style={styles.progress}>
            <BoxShadow setting={progresshadow}>
              <LinearGradient
                style={[
                  styles.progressbar,
                  progress && total ? [{ width: (progress * 83) / total }] : {},
                ]}
                start={{ x: 1.375, y: 6.253 }}
                end={{ x: -0.037, y: 1 }}
                colors={["#f12874", "#ee2976", "#6a53b5", "#1170df"]}
                locations={[0, 0.209, 0.379, 1]}
              ></LinearGradient>
            </BoxShadow>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  projectcardsimple: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    height: 65,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    color: "#032B77",
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    marginLeft: 7,
  },
  label: {
    flex: 1,
    flexDirection: "row",
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
    width: 80,
    height: 3,
    marginTop: 4,
  },
  progressbar: {
    width: 80,
    height: 3,
    borderRadius: 16,
  },
  labelicon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
