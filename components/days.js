import React from "react";
import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
import Timelinecalendar from "./../components/timelinecalendar";
export default function Days({
  daylist,
  active,
  tasklist,
  ontaskpress,
  style,
}) {
  const dayshadow = {
    width: 16,
    height: 16,
    color: "#FB5185",
    border: 15,
    radius: 8,
    opacity: 0.6,
    x: 7,
    y: 15,
    style: {
      marginTop: 0,
      marginRight: 13,
    },
  };
  const dayshadowda = {
    width: 16,
    height: 16,
    color: "#FB5185",
    border: 15,
    radius: 8,
    opacity: 0,
    x: 7,
    y: 15,
    style: {
      marginTop: 0,
      marginRight: 13,
    },
  };
  const daydata = daylist ? daylist : [];
  var calenderdata = [];
  if (daydata && tasklist) {
    daydata.map((item, index) => {
      var order = 0;
      tasklist
        .filter((task) => task.startday == item.day)
        .map((taskitem, taskindex) => {
          calenderdata
            .filter(
              (taskdata) =>
                taskdata.day == item.dayint && taskdata.data == false
            )
            .map((taskitemdata) => {
              if (taskitemdata.order == order) order++;
            });
          calenderdata.push({
            order: order,
            day: taskitem.startdayint,
            data: taskitem,
            index: taskindex,
          });
          placeholderstartday = taskitem.startdayint + 1;
          while (placeholderstartday <= taskitem.enddayint) {
            calenderdata.push({
              fromitemid: taskitem.id,
              order: order,
              day: placeholderstartday,
              data: false,
            });
            placeholderstartday++;
          }
          order++;
        });
    });
  }
  return (
    <View>
      <View style={[styles.container, style]}>
        {daydata.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <View key={index} style={styles.day}>
                <Text
                  style={[
                    styles.dayname,
                    active && active == item.day ? styles.daynameactive : {},
                  ]}
                >
                  {item.dayname}
                </Text>
                <BoxShadow
                  setting={
                    active && active == item.day ? dayshadow : dayshadowda
                  }
                >
                  <LinearGradient
                    style={styles.daynumberbg}
                    start={{ x: 0.419, y: 0 }}
                    end={{ x: 0.673, y: 0.961 }}
                    colors={
                      active && active == item.day
                        ? ["#ffadc6", "#f12874"]
                        : ["rgba(255,255,255,0.1)", "rgba(3,43,119,0.1)"]
                    }
                    locations={[0, 1]}
                  >
                    <Text
                      style={[
                        styles.daynumber,
                        active && active == item.day
                          ? styles.daynumberactive
                          : {},
                      ]}
                    >
                      {item.day}
                    </Text>
                  </LinearGradient>
                </BoxShadow>
                {item.new ? <View style={styles.new}></View> : null}
              </View>
              {index != daydata.length - 1 ? (
                <View
                  style={[
                    styles.filler,
                    active && active == item.day ? styles.filleractive : {},
                  ]}
                >
                  <View
                    style={[
                      styles.spacer,
                      active && active == item.day ? styles.spaceractive : {},
                    ]}
                  ></View>
                </View>
              ) : null}
            </React.Fragment>
          );
        })}
      </View>
      {tasklist ? (
        <View style={styles.cols}>
          {daydata.map((item, index) => {
            return (
              <View key={index} style={styles.col}>
                <LinearGradient
                  style={[
                    styles.colbg,
                    Platform.OS == "ios" ? { overflow: "visible" } : {},
                  ]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  colors={
                    index % 2 === 1
                      ? [
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0)",
                        ]
                      : [
                          "rgba(17,112,223,0)",
                          "rgba(3,43,119,0.082)",
                          "rgba(255,255,255,0)",
                        ]
                  }
                  locations={[0, 0.09, 1]}
                >
                  {calenderdata
                    .filter((task) => task.day == item.dayint)
                    .sort((a, b) => (a.order > b.order ? 1 : -1))
                    .map((taskitem, taskindex) => {
                      if (taskitem.data)
                        return (
                          <View key={taskindex} style={styles.timelinecalendar}>
                            <Timelinecalendar
                              id={taskitem.data.id}
                              key={taskindex}
                              title={taskitem.data.title}
                              image={taskitem.data.picture}
                              onpress={ontaskpress}
                              precent={taskitem.data.progress}
                              backgroundColor={taskitem.data.backgroundcolor}
                              boxwidth={
                                (taskitem.data.endday -
                                  taskitem.data.startday +
                                  1) *
                                65
                              }
                            />
                          </View>
                        );
                      else
                        return (
                          <View
                            key={taskindex}
                            style={styles.timelinecalendar}
                          />
                        );
                    })}
                </LinearGradient>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  day: {
    alignItems: "center",
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
  dayname: {
    fontSize: 13,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#ABB7D0",
  },
  daynameactive: {
    color: "#F12874",
  },
  daynumberbg: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    transform: [{ rotate: "45deg" }],
    marginTop: 6,
    backgroundColor: "#fff",
  },
  daynumber: {
    transform: [{ rotate: "-45deg" }],
    fontSize: 14,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#ABB7D0",
  },
  daynumberactive: {
    color: "#fff",
  },
  new: {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: 4,
    backgroundColor: "#F12874",
    bottom: 0,
  },
  filler: {
    width: 31,
    height: 1,
    backgroundColor: "#EAEDF2",
    borderRadius: 1,
    alignItems: "center",
    marginTop: 10,
  },
  spacer: {
    width: 5,
    height: 5,
    backgroundColor: "#EAEDF2",
    borderRadius: 5,
    marginTop: -1.5,
  },
  filleractive: {
    backgroundColor: "#F12874",
  },
  spaceractive: {
    backgroundColor: "#F12874",
  },
  cols: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 23,
  },
  col: {},
  colbg: {
    flex: 1,
    width: 69,
    paddingTop: 20,
  },
  timelinecalendar: {
    marginBottom: 20,
    marginLeft: 10,
    height: 48,
  },
  calenderscroll: {
    marginBottom: 10,
  },
});
