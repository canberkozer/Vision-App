import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/topbar3";
import BNavigation from "./../components/navigation";
import Days from "./../components/days";
import Dropdown from "./../components/dropdown";
import { LinearGradient } from "expo-linear-gradient";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Timeline({ navigation }) {
  const pressed = (id) => {
    console.log(id);
  };
  const daylist = [
    { dayname: "SAT", day: "02", dayint: 2, new: false },
    { dayname: "SUN", day: "03", dayint: 3, new: true },
    { dayname: "MON", day: "04", dayint: 4, new: false },
    { dayname: "TUS", day: "05", dayint: 5, new: false },
    { dayname: "WED", day: "06", dayint: 6, new: true },
    { dayname: "THU", day: "07", dayint: 7, new: false },
    { dayname: "THU", day: "08", dayint: 8, new: false },
    { dayname: "THU", day: "09", dayint: 9, new: false },
    { dayname: "THU", day: "10", dayint: 10, new: false },
    { dayname: "THU", day: "11", dayint: 11, new: false },
    { dayname: "THU", day: "12", dayint: 12, new: false },
    { dayname: "THU", day: "13", dayint: 13, new: false },
    { dayname: "THU", day: "14", dayint: 14, new: false },
    { dayname: "THU", day: "15", dayint: 15, new: false },
    { dayname: "THU", day: "16", dayint: 16, new: false },
    { dayname: "THU", day: "17", dayint: 17, new: false },
  ];
  const dropdownitems = [
    {
      label: "Landing Page",
      value: "doing",
      icon: () => (
        <Image
          style={{ width: 24, height: 24, marginRight: 2 }}
          source={require("./../assets/icons/pc.png")}
        />
      ),
    },
    {
      label: "Mobile App",
      value: "doing2",
      icon: () => (
        <Image
          style={{ width: 24, height: 24, marginRight: 2 }}
          source={require("./../assets/icons/male-technologist.png")}
        />
      ),
    },
  ];
  const tasks = [
    {
      id: 1,
      startday: "02",
      startdayint: 2,
      endday: "04",
      enddayint: 4,
      title: "Complete Documents",
      progress: 35,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#F12874",
    },
    {
      id: 2,
      startday: "02",
      startdayint: 2,
      endday: "03",
      enddayint: 3,
      title: "Delivery UI",
      progress: 100,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#1170DF",
    },
    {
      id: 6,
      startday: "02",
      startdayint: 2,
      endday: "04",
      enddayint: 4,
      title: "Shapes",
      progress: 0,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#52E3B1",
    },
    {
      id: 7,
      startday: "02",
      startdayint: 2,
      endday: "04",
      enddayint: 4,
      title: "Icons",
      progress: 63,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#1170DF",
    },
    {
      id: 8,
      startday: "05",
      startdayint: 5,
      endday: "07",
      enddayint: 7,
      title: "Theme",
      progress: 63,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#1170DF",
    },
    {
      id: 9,
      startday: "07",
      startdayint: 7,
      endday: "09",
      enddayint: 9,
      title: "UX",
      progress: 63,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#1170DF",
    },
    {
      id: 3,
      startday: "03",
      startdayint: 3,
      endday: "05",
      enddayint: 5,
      title: "Report",
      progress: 55,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#52E3B1",
    },
    {
      id: 4,
      startday: "04",
      startdayint: 4,
      endday: "06",
      enddayint: 6,
      title: "User Test",
      progress: 83,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#FFD90A",
    },
    {
      id: 5,
      startday: "05",
      startdayint: 5,
      endday: "08",
      enddayint: 8,
      title: "Review",
      progress: 18,
      picture: require("./../assets/dummypictures/picture2.png"),
      backgroundcolor: "#F12874",
    },
  ];
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
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.toolbar}>
                <Topbar
                  title="Timeline"
                  onmenuPress={ControlDrawerPanel}
                  onuserPress={pressed}
                  backgroundcolor="#FAFCFF"
                />
              </View>
              <View
                style={[
                  styles.dropdown,
                  Platform.OS != "android" && { zIndex: 10 },
                ]}
              >
                <Dropdown
                  items={dropdownitems}
                  simple={true}
                  placeholder="select"
                  onchangeitem={pressed}
                  defaultvalue="doing"
                />
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.body}>
                  <Days daylist={daylist} active="02" tasklist={tasks} />
                </View>
              </ScrollView>
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
  dropdown: {
    width: 200,
    marginBottom: 40,
    alignSelf: "flex-end",
  },
});
