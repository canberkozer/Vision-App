import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/topbar5";
import BNavigation from "./../components/navigation";
import Weeklytask from "./../components/weeklytasks";
import Days from "./../components/days";
import Projectcount from "./../components/projectcount";
import Progresschart from "./../components/progresschart";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Activity({ navigation }) {
  const pressed = () => {
    console.log("pressed");
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
      <View
        style={[
          styles.container,
          { marginTop: insets.top, marginBottom: insets.bottom },
        ]}
      >
        <ScrollView
          style={styles.bodyscroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.toolbar}>
            <Topbar
              title="Activity"
              onbackiconPress={() => navigation.navigate("Home")}
              backgroundcolor="#FAFCFF"
            />
          </View>
          <View style={styles.body}>
            <View style={styles.weeklytask}>
              <Weeklytask
                title="Weekly Tasks"
                icon={require("./../assets/icons/weeklytasks.png")}
                data={[
                  { dayname: "SAT", day: "02", total: 30, blue: 20 },
                  { dayname: "SUN", day: "03", total: 50, blue: 10 },
                  { dayname: "MON", day: "04", total: 10, blue: 5 },
                  { dayname: "TUS", day: "05", total: 15, blue: 3 },
                  { dayname: "WED", day: "06", total: 12, blue: 5 },
                  { dayname: "THU", day: "07", total: 25, blue: 20 },
                  { dayname: "FRI", day: "08", total: 45, blue: 10 },
                ]}
                activeday="05"
                onPress={pressed}
              />
            </View>
            <View style={styles.days}>
              <Days
                daylist={[
                  { dayname: "All Days", day: ".", new: false },
                  { dayname: "SUN", day: "02", new: false },
                  { dayname: "MON", day: "03", new: true },
                  { dayname: "TUS", day: "04", new: false },
                  { dayname: "WED", day: "05", new: false },
                  { dayname: "THU", day: "06", new: true },
                ]}
                active="."
              />
            </View>
            <View style={styles.row}>
              <View style={styles.col2}>
                <Progresschart
                  title="Progress"
                  icon={require("./../assets/icons/progressicon.png")}
                  chartlabels={["Jan", "Feb", "Mar", "Apr"]}
                  chartdata={[20, 27, 25, 21]}
                ></Progresschart>
              </View>
              <View style={styles.col}>
                <Projectcount
                  title="Projects"
                  icon={require("./../assets/icons/projecticon.png")}
                  label1="Done"
                  label2="Doing"
                  value1="4"
                  value2="16"
                />
              </View>
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
    backgroundColor: "#FAFCFF",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 17,
  },
  weeklytask: {
    width: "100%",
    marginTop: -140,
  },
  days: {
    marginVertical: 40,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
    marginLeft: 8,
  },
  col2: {
    flex: 1,
    marginRight: 8,
  },
  bodyscroll: {
    marginBottom: 20,
  },
});
