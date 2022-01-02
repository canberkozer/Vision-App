import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/hometopbar";
import BNavigation from "./../components/navigation";
import { LinearGradient } from "expo-linear-gradient";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Home({ navigation }) {
  const pressed = () => {
    console.log("pressed");
  };
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
                  onAvatarPress={() => navigation.navigate("Profile")}
                  onMenuiconPress={ControlDrawerPanel}
                  hasnotification={true}
                />
              </View>
              <View style={styles.body}>
                <Image
                  style={styles.image}
                  source={require("./../assets/splash/Illustration1.png")}
                />
                <Text style={styles.text1}>
                  You haven’t added a project yet...
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Homeproject")}
                >
                  <Text style={styles.text2}>Let’s Do it!</Text>
                </TouchableOpacity>
                <View style={styles.line} />
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
    paddingHorizontal: 17,
  },
  image: {
    width: 270,
    height: 272,
    resizeMode: "contain",
  },
  text1: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    color: "#032B77",
    marginTop: 50,
  },
  text2: {
    fontSize: 24,
    fontFamily: "BarlowCondensed-Regular",
    color: "#1170DF",
    marginTop: 20,
  },
  line: {
    width: 1,
    height: 120,
    backgroundColor: "rgba(3,43,119,0.2)",
    marginTop: 22,
  },
});
