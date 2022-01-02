import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Weeklytask({
  title,
  icon,
  data,
  activeday,
  onPress,
  style,
}) {
  const chartdata = data ? data : [];
  return (
    <View style={style}>
      <View style={styles.btitle}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.titletext}>{title}</Text>
      </View>
      <View style={styles.weeklytask}>
        {chartdata.map((item, index) => {
          return (
            <View key={index} style={styles.row}>
              <TouchableOpacity
                style={styles.row}
                onPress={() => {
                  onPress(index);
                }}
              >
                <LinearGradient
                  style={styles.rowbackground}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  colors={
                    activeday == item.day
                      ? [
                          "rgba(17,112,223,0)",
                          "rgba(40,126,226,0.031)",
                          "rgba(17,112,223,0.153)",
                          "rgba(17,112,223,0)",
                        ]
                      : [
                          "rgba(17,112,223,0)",
                          "rgba(17,112,223,0)",
                          "rgba(17,112,223,0)",
                          "rgba(17,112,223,0)",
                        ]
                  }
                  locations={[0, 0.239, 0.804, 1]}
                >
                  <View style={styles.title}>
                    <Text style={styles.dayname}>{item.dayname}</Text>
                    <Text style={styles.day}>{item.day}</Text>
                  </View>
                  <View style={styles.stacked}>
                    <View style={styles.stackeddata}>
                      <View
                        style={[
                          styles.stackeblue,
                          { height: (item.blue * 100) / item.total + "%" },
                        ]}
                      ></View>
                    </View>
                    <View
                      style={[
                        styles.stackeddata,
                        { justifyContent: "flex-start" },
                      ]}
                    >
                      <View
                        style={[
                          styles.stackegreen,
                          {
                            height:
                              ((item.total - item.blue) * 100) / item.total +
                              "%",
                          },
                        ]}
                      ></View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  weeklytask: {
    height: 192,
    backgroundColor: "#ffff",
    borderRadius: 16,
    flexDirection: "row",
    paddingVertical: 14,
  },
  row: {
    flex: 1,
  },
  rowbackground: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dayname: {
    fontSize: 12,
    color: "#032B77",
    opacity: 0.2,
    fontFamily: "BarlowCondensed-SemiBold",
    textAlign: "center",
    paddingVertical: 8,
  },
  day: {
    fontSize: 13,
    color: "#032B77",
    opacity: 0.4,
    fontFamily: "BarlowCondensed-SemiBold",
    textAlign: "center",
    paddingVertical: 8,
  },
  stacked: {
    flex: 1,
    alignItems: "center",
  },
  stackeddata: {
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: 1,
  },
  stackeblue: {
    width: 8,
    height: 27,
    backgroundColor: "#1170DF",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  stackegreen: {
    width: 8,
    height: 59,
    backgroundColor: "#52E3B1",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  btitle: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  icon: {
    width: 17,
    height: 17,
    resizeMode: "contain",
  },
  titletext: {
    fontSize: 20,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 5,
  },
});
