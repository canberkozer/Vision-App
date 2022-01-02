import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Platform,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/topbar2";
import BNavigation from "./../components/navigation";
import Status from "./../components/status";
import Assign from "./../components/assign";
import Datecard from "./../components/datecard";
import Notecard from "./../components/notecard";
import Voicecard from "./../components/voicecard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Tasksfullview({ navigation }) {
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
  const dropdownitems = [
    {
      label: "Doing",
      value: "doing",
      icon: () => (
        <Image
          style={{ width: 24, height: 24, marginRight: 2 }}
          source={require("./../assets/icons/male-technologist.png")}
        />
      ),
    },
    {
      label: "Doing2",
      value: "doing2",
      icon: () => (
        <Image
          style={{ width: 24, height: 24, marginRight: 2 }}
          source={require("./../assets/icons/male-technologist.png")}
        />
      ),
    },
  ];
  const teammembers = [
    { id: 1, picture: require("./../assets/dummypictures/picture.png") },
    { id: 2, picture: require("./../assets/dummypictures/coworker2.png") },
    { id: 3, picture: require("./../assets/dummypictures/coworker3.png") },
    { id: 4, coworker2: require("./../assets/dummypictures/coworker4.png") },
  ];
  const checklistdata = [
    { title: "Design Splash", done: true },
    { title: "Design Home Screen", done: true },
  ];
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
      <View
        style={[
          styles.container,
          { marginTop: insets.top, marginBottom: insets.bottom },
        ]}
      >
        <ScrollView style={styles.bodyscroll} showsVerticalScrollIndicator={false}>
          <View style={styles.toolbar}>
            <Topbar
              title="Tasks2"
              onbackiconPress={() => navigation.navigate("Tasks")}
              onstarPress={pressed}
              backgroundcolor="#FAFCFF"
              label="Mobile Ui Kit"
              labelicon={require("./../assets/icons/mobile-phone.png")}
            />
          </View>
          <View style={styles.body}>
            <View
              style={[styles.row, Platform.OS != "android" && { zIndex: 10 }]}
            >
              <View style={styles.col}>
                <Status
                  title="Status"
                  uncicon={require("./../assets/icons/checkmark-done_gray.png")}
                  icon={require("./../assets/icons/checkmark-done.png")}
                  items={dropdownitems}
                  defaultvalue="doing"
                  placeholder="select"
                  onchangeitem={pressed}
                  complete={true}
                />
              </View>
              <View style={styles.col2}>
                <Assign
                  members={teammembers}
                  onmemberPress={pressed}
                  onaddmorePress={pressed}
                  memberslimit="3"
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col}>
                <Datecard
                  title="Due Time"
                  text="20:00"
                  icon={require("./../assets/icons/clock.png")}
                />
              </View>
              <View style={styles.col2}>
                <Datecard
                  title="Date"
                  text="Sun, January 2, 2022"
                  icon={require("./../assets/icons/calendar.png")}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col2}>
                <Notecard
                  title="Note"
                  avatar={require("./../assets/dummypictures/picture.png")}
                  labelicon={require("./../assets/icons/pen.png")}
                  buttonicon={require("./../assets/icons/pen-edit.png")}
                  onbuttonpress={pressed}
                  ondeletepress={pressed}
                  message="“ The word project comes from the Latin word projectum from the Latin verb proicere “"
                  totalnotes="3"
                  currentnote="1"
                  complete={true}
                />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.col2}>
                <Voicecard
                  title="Voice"
                  avatar={require("./../assets/dummypictures/picture.png")}
                  labelicon={require("./../assets/icons/voice.png")}
                  buttonicon={require("./../assets/icons/microphone-mic-rec.png")}
                  onbuttonpress={pressed}
                  ondeletepress={pressed}
                  voicedata={[
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
                  ]}
                  playpercentage="50"
                  complete={true}
                />
              </View>
            </View>
            <View style={styles.checklist}>
              <View style={styles.checkllistlabel}>
                <Image
                  style={styles.checklisticon}
                  source={require("./../assets/icons/list-do-list-checkmark.png")}
                />
                <Text style={styles.checkllisttitle}>Check List</Text>
              </View>
              {checklistdata.map((item, index) => {
                return (
                  <View key={index} style={styles.workitem}>
                    <Image
                      style={styles.checklisticon}
                      source={require("./../assets/icons/checklist.png")}
                    />
                    <View style={styles.workitemdata}>
                      <View
                        style={[
                          styles.workitemcheckbox,
                          item.done ? styles.workitemcheckboxactive : {},
                        ]}
                      >
                        <Image
                          style={styles.checkicon}
                          source={require("./../assets/icons/check.png")}
                        />
                      </View>
                      <Text style={styles.workitemlabel}>{item.title}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbff",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  switch: {
    marginBottom: 34,
  },
  daylist: {
    width: "100%",
    marginBottom: 22,
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
    marginRight: 45,
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
  bodyscroll: {
    width: "100%",
    flex: 1,
    marginBottom: 20,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  col: {
    flex: 1,
    marginRight: 17,
  },
  col2: {
    flex: 1,
  },
  workitem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 17,
  },
  workitemdata: {
    marginLeft: 17,
    flexDirection: "row",
    alignItems: "center",
  },
  workitemcheckbox: {
    width: 20,
    height: 20,
    borderRadius: 1,
    borderColor: "#eaf3fc",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  workitemcheckboxactive: {
    backgroundColor: "#1170DF",
  },
  workitemlabel: {
    color: "#032B77",
    fontSize: 17,
    fontFamily: "BarlowCondensed-Medium",
  },
  checkicon: {
    width: 6,
    height: 4,
    resizeMode: "contain",
  },
  checklisticon: {
    width: 11,
    height: 11,
    resizeMode: "contain",
  },
  checkllistlabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  checklisticon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkllisttitle: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#ABB7D0",
  },
  checklist: {
    marginBottom: 20,
  },
});
