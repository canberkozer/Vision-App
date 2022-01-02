import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
export default function Projectcount({
  title,
  icon,
  label1,
  value1,
  label2,
  value2,
  style,
}) {
  return (
    <View style={[styles.box, style]}>
      <View style={styles.title}>
        <Image style={styles.titleicon} source={icon} />
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.col}>
          <Text style={styles.collabel}>{label1}</Text>
          <Text style={styles.colvalue}>{value1}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.collabel}>{label2}</Text>
          <Text style={styles.colvalue}>{value2}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    height: 176,
    backgroundColor: "#1170DE",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
    color: "#fff",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  body: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  col: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3689EA",
    borderRadius: 10,
    marginHorizontal: 6,
  },
  collabel: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  colvalue: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  titleicon: {
    width: 20,
    height: 17,
    resizeMode: "contain",
  },
});
