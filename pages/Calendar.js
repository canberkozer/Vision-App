import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/topbar";
import BNavigation from "./../components/navigation";
import Stickynote from "./../components/stickynote";
import { LinearGradient } from "expo-linear-gradient";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Calendar({ navigation }) {
  const pressed = (id) => {
    console.log(id);
  };
  var days = [];
  const today = 12;
  const daysinmonth = 30;
  const tasks = [
    {
      taskid: 52,
      dayid: 12,
      label: "Tasks",
      data: 4,
      color: "green",
      icon: require("./../assets/icons/map.png"),
    },
    {
      taskid: 53,
      dayid: 2,
      label: "Tasks",
      data: 2,
      color: "blue",
      icon: require("./../assets/icons/motor.png"),
    },
    {
      taskid: 54,
      dayid: 15,
      label: "Tasks",
      data: 7,
      color: "purple",
      icon: require("./../assets/icons/headphone.png"),
    },
    {
      taskid: 55,
      dayid: 19,
      label: "Tasks",
      data: 1,
      color: "yellow",
      icon: require("./../assets/icons/athletic-shoe.png"),
    },
  ];
  for (let i = 1; i <= daysinmonth; i++) {
    let item = tasks.find((el) => el.dayid === i);
    let hastask = tasks.some((el) => el.dayid === i);
    days.push(
      <View key={i} style={styles.day}>
        <Text
          style={[
            styles.daynumber,
            hastask ? styles.daynumberhastask : {},
            today == i ? styles.daynumberactive : {},
          ]}
        >
          {i}
        </Text>
        <View style={styles.tasks}>
          {today == i ? <View style={styles.taskactive}></View> : null}
          {hastask ? (
            <Stickynote
              id={item.taskid}
              icon={item.icon}
              data={item.data}
              label={item.label}
              color={item.color}
              onpress={pressed}
            />
          ) : null}
        </View>
      </View>
    );
  }
  var drawer = null;
  var draweropen = false;
  const ControlDrawerPanel = () => {
    if (!draweropen) {
      drawer.open();
      draweropen = true;
    } else {
      drawer.close();
      draweropen = false;
    }
  };
  const [isReady, setisReady] = useState(false);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setisReady(true);
    });
  });
  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FAFCFF",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#1170DF" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[
          styles.containerbg,
          { marginTop: insets.top, marginBottom: insets.bottom },
        ]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1.287, y: 1.614 }}
        colors={["#1170df", "#032b77"]}
        locations={[0, 1]}
      >
        <Drawer
          ref={(ref) => (drawer = ref)}
          type="static"
          open={false}
          openDrawerOffset={160}
          content={<Homemenupage navigation={navigation} />}
          tapToClose={true}
          styles={{
            drawer: {
              borderRadius: 20,
              overflow: "hidden",
            },
          }}
          tweenHandler={(ratio) => ({
            main: {
              transform: [
                { scaleX: 1 - 0.15 * ratio },
                { scaleY: 1 - 0.15 * ratio },
              ],
              borderRadius: 20 * ratio,
              overflow: "hidden",
            },
          })}
          onClose={() => (draweropen = false)}
        >
          <View style={styles.container}>
            <ScrollView
              style={styles.bodyscroll}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.toolbar}>
                <Topbar
                  title="Calendar"
                  onmenuPress={ControlDrawerPanel}
                  onsearchPress={pressed}
                  onplusPress={pressed}
                  backgroundcolor="#FAFCFF"
                />
              </View>
              <View style={styles.calenderpick}>
                <TouchableOpacity style={styles.pickbutton} onPress={() => {}}>
                  <Image
                    style={styles.pickbuttonicon}
                    source={require("./../assets/icons/backicon.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.calenderpicktext}>January 2022</Text>
                <TouchableOpacity style={styles.pickbutton} onPress={() => {}}>
                  <Image
                    style={styles.pickbuttonicon}
                    source={require("./../assets/icons/nexticon.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.body}>
                <View style={styles.calender}>{days}</View>
              </View>
            </ScrollView>
            <View style={styles.navigation}>
              <BNavigation
                navigation={navigation}
                navigationPressed={pressed}
                activenavigation="home"
              />
            </View>
          </View>
        </Drawer>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFF",
  },
  containerbg: {
    flex: 1,
    marginTop: 30,
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 9,
  },
  daynumber: {
    backgroundColor: "#f3f5fb",
    height: 20,
    textAlign: "center",
    fontSize: 13,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-Bold",
    borderRadius: 5,
    marginHorizontal: -3,
  },
  calender: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tasks: {
    minWidth: 47,
    minHeight: 117,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 30,
  },
  daynumberhastask: {
    color: "#032B77",
  },
  daynumberactive: {
    color: "#F12874",
  },
  taskactive: {
    width: 4,
    height: 4,
    backgroundColor: "#F12874",
    borderRadius: 4,
    position: "absolute",
    top: 0,
  },
  calenderpick: {
    width: 250,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 46,
  },
  pickbutton: {
    width: 30,
    height: 31,
    borderRadius: 5,
    backgroundColor: "#ABB7D0",
    alignItems: "center",
    justifyContent: "center",
  },
  pickbuttonicon: {
    width: 6,
    height: 12,
    resizeMode: "contain",
  },
  calenderpicktext: {
    flex: 1,
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    color: "#ABB7D0",
    textAlign: "center",
  },
});
