import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import {
  Svg,
  Path,
  Defs,
  Stop,
  LinearGradient as LG,
  G,
} from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigationState } from "@react-navigation/native";
export default function Navigation({ navigation, style }) {
  const routes = useNavigationState((state) => state.routes);
  const currentRoute = routes[routes.length - 1].name;
  return (
    <View style={[styles.navigation, style]}>
      <LinearGradient
        style={styles.overlay}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.771 }}
        colors={[
          "rgba(255,255,255,0)",
          "rgba(255,255,255,0.89)",
          "rgba(255,255,255,1)",
        ]}
        locations={[0, 0.501, 1]}
      />
      <View style={styles.buttons}>
        <LinearGradient
          style={styles.buttonsbg}
          start={{ x: 0.329, y: -0.314 }}
          end={{ x: 0.539, y: 3.093 }}
          colors={["#1170df", "#032b77"]}
          locations={[0, 1]}
        >
          <View style={styles.corners}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.icons}
              source={require("./../assets/icons/homeicon.png")}
            />
            {currentRoute && currentRoute == "Home" ? (
              <Image
                style={styles.buttonactive}
                source={require("./../assets/icons/activeicon.png")}
              />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Tasks");
            }}
          >
            <Image
              style={styles.icons}
              source={require("./../assets/icons/tasksicon.png")}
            />
            {currentRoute && currentRoute == "Tasks" ? (
              <Image
                style={styles.buttonactive}
                source={require("./../assets/icons/activeicon.png")}
              />
            ) : null}
          </TouchableOpacity>
          <View style={styles.spacer}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Calendar");
            }}
          >
            <Image
              style={styles.icons}
              source={require("./../assets/icons/calendaricon.png")}
            />
            {currentRoute && currentRoute == "Calendar" ? (
              <Image
                style={styles.buttonactive}
                source={require("./../assets/icons/activeicon.png")}
              />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Timeline");
            }}
          >
            <Image
              style={styles.icons}
              source={require("./../assets/icons/timelineicon.png")}
            />
            {currentRoute && currentRoute == "Timeline" ? (
              <Image
                style={styles.buttonactive}
                source={require("./../assets/icons/activeicon.png")}
              />
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.projectbutton}
            onPress={() => {
              navigation.navigate("Projects");
            }}
          >
            <Svg width="55.224" height="55.223" viewBox="0 0 55.224 55.223">
              <Defs>
                <LG
                  id="linear-gradient"
                  x1="0.46"
                  x2="0.747"
                  y2="1.068"
                  gradientUnits="objectBoundingBox"
                >
                  <Stop offset="0" stopColor="#3fc1c9" />
                  <Stop
                    offset="0.689"
                    stopColor="#8fe8ed"
                    stop-opacity="0.745"
                  />
                  <Stop offset="1" stopColor="#fff" stop-opacity="0.345" />
                </LG>
                <LG
                  id="linear-gradient-2"
                  x1="0.46"
                  x2="0.747"
                  y2="1.068"
                  gradientUnits="objectBoundingBox"
                >
                  <Stop offset="0" stopColor="#1170df" />
                  <Stop offset="0.5" stopColor="#1170df" stop-opacity="0.675" />
                  <Stop offset="1" stopColor="#fff" stop-opacity="0" />
                </LG>
              </Defs>
              <G id="Shape" transform="translate(-161 -732)">
                <Path
                  id="Path_68"
                  data-name="Path 68"
                  d="M10.676,10.772c14.8-14.8,20.1-13.919,34.019,0s14.158,19.86,0,34.019-20.36,13.659-34.019,0S-4.124,25.572,10.676,10.772Z"
                  transform="translate(161 732)"
                  fill="url(#linear-gradient)"
                />
                <Path
                  id="Path_76"
                  data-name="Path 76"
                  d="M10.676,10.772c14.8-14.8,20.1-13.919,34.019,0s14.158,19.86,0,34.019-20.36,13.659-34.019,0S-4.124,25.572,10.676,10.772Z"
                  transform="translate(161 732)"
                  fill="url(#linear-gradient-2)"
                />
              </G>
            </Svg>
            <Image
              style={styles.projectbuttonicon}
              source={require("./../assets/icons/projecticon2.png")}
            />
          </TouchableOpacity>
          {currentRoute && currentRoute == "Projects" ? (
            <Image
              style={styles.buttonactive2}
              source={require("./../assets/icons/activeicon.png")}
            />
          ) : null}
        </LinearGradient>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navigation: {
    height: 85,
  },
  navigationshape: {
    zIndex: 2,
  },
  overlay: {
    position: "absolute",
    height: 72,
    width: "100%",
    top: -53,
    zIndex: 1,
  },
  buttons: {
    width: "100%",
    height: 85,
    zIndex: 2,
    backgroundColor: "gray",
  },
  buttonsbg: {
    height: 85,
    paddingTop: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 19,
    paddingHorizontal: 25,
    overflow: "hidden",
  },
  buttonactive: {
    width: 9,
    height: 9,
    position: "absolute",
    bottom: -3,
    left: "50%",
    marginLeft: 20,
  },
  buttonactive2: {
    width: 9,
    height: 9,
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: -4.5,
  },
  spacer: {
    width: 54,
  },
  projectbutton: {
    position: "absolute",
    top: 0,
  },
  projectbuttonicon: {
    position: "absolute",
    right: "50%",
    top: "50%",
    marginTop: -10,
    marginRight: -11,
    width: 20,
    height: 20,
  },
  corners: {
    position: "absolute",
    width: "100%",
    height: 28,
    backgroundColor: "#fff",
    top: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  icons: {
    width: 20,
    height: 20,
  },
});
