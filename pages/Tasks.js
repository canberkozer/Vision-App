import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Task from "./../components/task";
import Topbar from "./../components/topbar";
import BNavigation from "./../components/navigation";
import Days from "./../components/days";
import SwitchButton from "./../components/switchbutton";
import Buttongroup from "./../components/buttongroup";
import { SwipeListView } from "react-native-swipe-list-view";
import { LinearGradient } from "expo-linear-gradient";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Tasks({ navigation }) {
  const pressed = () => {
    console.log("pressed");
  };
  const daylist = [
    { dayname: "SAT", day: "02", new: false },
    { dayname: "SUN", day: "03", new: true },
    { dayname: "MON", day: "04", new: false },
    { dayname: "TUS", day: "05", new: false },
    { dayname: "WED", day: "06", new: true },
    { dayname: "THU", day: "07", new: false },
  ];
  const taskslist = [
    {
      id: 1,
      icon: require("./../assets/icons/finished_green.png"),
      title: "Choose New Pages",
      label: "Mobile Ui Kit",
      fromtime: "11:30",
      totime: "14:30",
      labelicon: require("./../assets/icons/mobile-phone.png"),
      buttonicon: require("./../assets/icons/pin2.png"),
      stared: false,
      checklist: [
        { title: "Design Splash", done: true },
        { title: "Design Home Screen", done: true },
      ],
      teamlist: [
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
      ],
    },
    {
      id: 2,
      icon: require("./../assets/icons/time.png"),
      title: "Design new ui kit",
      label: "Landing Page",
      fromtime: "P1",
      totime: "",
      labelicon: require("./../assets/icons/pc.png"),
      buttonicon: false,
      stared: false,
      checklist: [
        { title: "Design Splash", done: false },
        { title: "Design Home Screen", done: true },
      ],
      teamlist: [
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
      ],
    },
    {
      id: 3,
      icon: require("./../assets/icons/finished_green.png"),
      title: "Color palette",
      label: "Mobile Ui Kit",
      fromtime: "",
      totime: "",
      labelicon: require("./../assets/icons/mobile-phone.png"),
      buttonicon: false,
      stared: true,
      checklist: [
        { title: "Design Splash", done: true },
        { title: "Design Home Screen", done: true },
      ],
      teamlist: [
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
      ],
    },
    {
      id: 4,
      icon: null,
      title: "Icons",
      label: "Landing Page",
      fromtime: "11:30",
      totime: "14:30",
      labelicon: require("./../assets/icons/pc.png"),
      buttonicon: false,
      stared: false,
      checklist: [
        { title: "Design Splash", done: true },
        { title: "Design Home Screen", done: true },
      ],
      teamlist: [
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
      ],
    },
    {
      id: 5,
      icon: null,
      title: "Shapes",
      label: "Mobile Ui Kit",
      fromtime: "",
      totime: "",
      labelicon: require("./../assets/icons/mobile-phone.png"),
      buttonicon: false,
      stared: false,
      checklist: [
        { title: "Design Splash", done: true },
        { title: "Design Home Screen", done: true },
      ],
      teamlist: [
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
        require("./../assets/dummypictures/picture.png"),
      ],
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
            <SwipeListView
              keyExtractor={(item, index) => index.toString()}
              data={taskslist}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <View style={styles.toolbar}>
                    <Topbar
                      title="Tasks"
                      onmenuPress={ControlDrawerPanel}
                      onsearchPress={pressed}
                      onplusPress={pressed}
                      backgroundcolor="#FAFCFF"
                    />
                  </View>
                  <View style={styles.body}>
                    <View style={styles.switch}>
                      <SwitchButton
                        onValueChange={(val) => console.log(val)}
                        text1="All"
                        text2="Importants"
                        switchWidth={200}
                        switchHeight={44}
                        switchBorderRadius={5}
                        switchSpeedChange={500}
                        switchBorderColor="#fff"
                        btnBorderColor="#ABB7D0"
                        btnBackgroundColor="#ABB7D0"
                        fontColor="#ABB7D0"
                        btnfontFamily="BarlowCondensed-Medium"
                        btnfontSize={20}
                      />
                    </View>
                    <View style={styles.daylist}>
                      <Days daylist={daylist} active="02" />
                    </View>
                  </View>
                </>
              }
              renderItem={(rowData, rowMap) => (
                <View
                  key={rowData.item.id}
                  style={[
                    styles.task,
                    rowData.index == 0 ? styles.firsttask : {},
                  ]}
                >
                  <Task
                    id={rowData.item.id}
                    taskicon={rowData.item.icon}
                    title={rowData.item.title}
                    label={rowData.item.label}
                    fromtime={rowData.item.fromtime}
                    totime={rowData.item.totime}
                    labelicon={rowData.item.labelicon}
                    buttonicon={rowData.item.buttonicon}
                    onbuttonpress={() => navigation.navigate("Tasksfullview")}
                    stared={rowData.item.stared}
                    teamlist={rowData.item.teamlist}
                    checklist={rowData.item.checklist}
                  />
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View
                  style={[
                    styles.taskactions,
                    data.index == 0 ? styles.firsttask : {},
                  ]}
                >
                  <View style={styles.taskactionleft}>
                    <Buttongroup
                      onPress={pressed}
                      color="#52E3B1"
                      icon={require("./../assets/icons/finished.png")}
                      label="DONE"
                      id="done"
                    />
                  </View>
                  <View style={styles.taskactionspace} />
                  <View style={styles.taskactionright}>
                    <View style={styles.actionbuttons}>
                      <Buttongroup
                        onPress={pressed}
                        color="#1170DF"
                        icon={require("./../assets/icons/star.png")}
                        id="star"
                      />
                    </View>
                    <View style={styles.actionbuttons}>
                      <Buttongroup
                        onPress={pressed}
                        color="#032B77"
                        icon={require("./../assets/icons/pin.png")}
                        id="pin"
                      />
                    </View>
                    <View style={styles.actionbuttons}>
                      <Buttongroup
                        onPress={pressed}
                        color="#F12874"
                        icon={require("./../assets/icons/delete.png")}
                        id="delete"
                      />
                    </View>
                  </View>
                </View>
              )}
              leftOpenValue={65}
              rightOpenValue={-193}
            />

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
  },
  switch: {
    marginBottom: 34,
  },
  daylist: {
    width: "100%",
    marginBottom: 22,
    paddingHorizontal: 10,
  },
  tasklist: {
    flex: 1,
    width: "100%",
    marginBottom: 30,
  },
  task: {
    marginHorizontal: 17,
    marginBottom: 25,
  },
  firsttask: {
    marginTop: 15,
  },
  taskactions: {
    marginHorizontal: 17,
    marginBottom: 15,
    flexDirection: "row",
  },
  taskactionleft: {
    width: 56,
    height: 64,
  },
  taskactionspace: {
    flex: 1,
  },
  taskactionright: {
    width: 184,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionbutton: {
    width: 56,
    height: 64,
    backgroundColor: "#000",
    flexDirection: "column",
  },
  actionbuttons: {
    width: 56,
    marginHorizontal: 4,
  },
});
