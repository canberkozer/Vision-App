import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/topbar4";
import BNavigation from "./../components/navigation";
import Progress from "./../components/progresscard";
import Task2 from "./../components/task2";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Projects_details({ navigation }) {
  const pressed = () => {
    console.log("pressed");
  };
  const teammembers = [
    { id: 1, picture: require("./../assets/dummypictures/picture.png") },
    { id: 2, picture: require("./../assets/dummypictures/coworker2.png") },
    { id: 3, picture: require("./../assets/dummypictures/coworker3.png") },
    { id: 4, picture: require("./../assets/dummypictures/coworker4.png") },
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
        <View style={styles.toolbar}>
          <Topbar
            title="Mobile Ui Kit"
            icon={require("./../assets/icons/mobile-phone.png")}
            onbackiconPress={() => navigation.navigate("Home")}
            onsearchPress={pressed}
            backgroundcolor="#FAFCFF"
          />
        </View>
        <View style={styles.body}>
          <View style={styles.progress}>
            <Progress
              title="Progress"
              icon={require("./../assets/icons/statistics-analytics.png")}
              progress="73"
              total="100"
            />
            <ScrollView
              style={styles.taskshscroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.tabs}>
                <View style={styles.tabtitle}>
                  <Image
                    style={styles.tabtitleicon}
                    source={require("./../assets/icons/memo.png")}
                  />
                  <Text style={[styles.tabtitletext, { color: "#1170DF" }]}>
                    Do
                  </Text>
                  <View
                    style={[styles.highlighter, { backgroundColor: "#1170DF" }]}
                  ></View>
                </View>
                <ScrollView
                  style={styles.tasksscroll}
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="Design New Ui Kit"
                      editcount="5"
                      voicecount="3"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="New Icon Set"
                      voicecount="2"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="Front End Develop"
                      editcount="7"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="A/B Tests"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="Front End Develop"
                      editcount="7"
                    />
                  </View>
                  <View style={styles.tasksadd}>
                    <View style={styles.tasksaddtextbox}>
                      <Image
                        style={styles.tasksaddicon}
                        source={require("./../assets/icons/plus.png")}
                      />
                      <Text style={styles.tasksaddtext}>Add Task</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.tabs}>
                <View style={styles.tabtitle}>
                  <Image
                    style={styles.tabtitleicon}
                    source={require("./../assets/icons/male-technologist.png")}
                  />
                  <Text style={[styles.tabtitletext, { color: "#F12874" }]}>
                    Doing
                  </Text>
                  <View
                    style={[styles.highlighter, { backgroundColor: "#F12874" }]}
                  ></View>
                </View>
                <ScrollView
                  style={styles.tasksscroll}
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="Design New Ui Kit"
                      editcount="5"
                      voicecount="3"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="New Icon Set"
                      voicecount="2"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="Front End Develop"
                      editcount="7"
                    />
                  </View>
                  <View style={styles.tasks}>
                    <Task2
                      buttonicon={require("./../assets/icons/arrowicon.png")}
                      memberlist={teammembers}
                      onbuttonpress={pressed}
                      title="A/B Tests"
                    />
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
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
    backgroundColor: "#FAFCFF",
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  progress: {
    width: "100%",
    paddingHorizontal: 17,
  },
  tabs: {
    width: 272,
    marginRight: 20,
  },
  tasksscroll: {
    marginBottom: 50,
  },
  taskshscroll: {
    paddingTop: 20,
  },
  tabtitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  tabtitleicon: {
    width: 24,
    height: 30,
    resizeMode: "contain",
  },
  tabtitletext: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 3,
  },
  tasks: {
    marginBottom: 16,
  },
  highlighter: {
    position: "absolute",
    left: 0,
    bottom: -2,
    width: 8,
    height: 1,
    borderRadius: 1,
    backgroundColor: "#000",
  },
  tasksadd: {
    width: "100%",
    height: 72,
    borderRadius: 16,
    borderColor: "#F0F4FA",
    borderWidth: 2,
    backgroundColor: "rgba(242,243,247,0.3)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  tasksaddicon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  tasksaddtextbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksaddtext: {
    fontSize: 18,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-Medium",
    marginLeft: 10,
  },
});
