import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import { Svg, Defs, Path, G, Stop, LinearGradient } from "react-native-svg";
import Textinputcomp from "../components/textinput";
import Button from "./../components/button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Register({ navigation }) {
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
        <View style={styles.containerbg}>
          <Svg
            width="1047.233"
            height="1384.221"
            viewBox="0 0 1047.233 1384.221"
          >
            <Defs>
              <LinearGradient
                id="linear-gradient"
                x1="0.159"
                y1="-0.185"
                x2="0.761"
                y2="0.436"
                gradientUnits="objectBoundingBox"
              >
                <Stop offset="0" stopColor="#add3ff" stopOpacity="0.314" />
                <Stop offset="1" stopColor="#f7f8fb" stopOpacity="0" />
              </LinearGradient>
            </Defs>
            <G id="Shapes" transform="translate(231.616 166.055)">
              <G
                id="Path_829"
                data-name="Path 829"
                transform="translate(-197.616 -134.055)"
                fill="none"
                opacity="0.02"
              >
                <Path
                  d="M110.629,111.622c153.358-153.358,208.27-144.23,352.5,0s146.708,205.792,0,352.5-210.968,141.533-352.5,0S-42.73,264.98,110.629,111.622Z"
                  stroke="none"
                />
                <Path
                  d="M 287.9595031738281 19.99993896484375 C 246.6352233886719 19.99993896484375 200.8813171386719 49.6534423828125 124.7705993652344 125.7640380859375 C -22.38970947265625 272.9244384765625 -6.62030029296875 318.5894165039063 124.7705993652344 449.9803161621094 C 198.3460083007813 523.5557250976563 243.6461181640625 552.221435546875 286.3409118652344 552.221435546875 C 329.2452087402344 552.221435546875 376.3670043945313 522.60009765625 448.9869995117188 449.9803161621094 C 586.8546142578125 312.1126403808594 586.8546142578125 263.6316223144531 448.9869995117188 125.7640380859375 C 383.6915283203125 60.46853637695313 333.9780883789063 19.99993896484375 287.9595031738281 19.99993896484375 M 287.95947265625 -6.103515625e-05 C 339.7106323242188 -6.103515625e-05 389.9048156738281 38.39764404296875 463.1291198730469 111.6219177246094 C 607.3591918945313 255.8520202636719 609.8370971679688 317.414306640625 463.1291198730469 464.1224365234375 C 390.4376220703125 536.8138427734375 337.9785461425781 572.221435546875 286.3408813476563 572.221435546875 C 233.7618408203125 572.221435546875 182.0341186523438 535.5280151367188 110.6285095214844 464.1224365234375 C -30.9041748046875 322.5897216796875 -42.72979736328125 264.980224609375 110.6285095214844 111.6219177246094 C 186.1283264160156 36.12213134765625 237.7761535644531 -6.103515625e-05 287.95947265625 -6.103515625e-05 Z"
                  stroke="none"
                  fill="#fff"
                />
              </G>
              <Path
                id="Path_377"
                data-name="Path 377"
                d="M110.629,111.622c153.358-153.358,208.27-144.23,352.5,0s146.708,205.792,0,352.5-210.968,141.533-352.5,0S-42.73,264.98,110.629,111.622Z"
                transform="translate(-231.616 645.945)"
                fill="url(#linear-gradient)"
              />
              <G
                id="Path_378"
                data-name="Path 378"
                transform="translate(243.384 -166.055)"
                fill="none"
                opacity="0.02"
              >
                <Path
                  d="M110.629,111.622c153.358-153.358,208.27-144.23,352.5,0s146.708,205.792,0,352.5-210.968,141.533-352.5,0S-42.73,264.98,110.629,111.622Z"
                  stroke="none"
                />
                <Path
                  d="M 287.9593811035156 79.99984741210938 C 266.3463745117188 79.99984741210938 225.7160339355469 109.6715393066406 167.1970520019531 168.1903686523438 C 108.7008666992188 226.6867065429688 79.36721801757813 267.6697082519531 80.01119995117188 290.0008544921875 C 80.91287231445313 321.2697143554688 143.5985412597656 383.9555053710938 167.1970520019531 407.5540161132813 C 203.5435485839844 443.9005126953125 255.4385375976563 492.2215270996094 286.3408813476563 492.2215270996094 C 321.8927001953125 492.2215270996094 385.619384765625 428.4950256347656 406.560546875 407.5540161132813 C 520.6497192382813 293.4648742675781 520.6497192382813 282.279541015625 406.560546875 168.1903686523438 C 382.4405517578125 144.0705261230469 318.369873046875 79.99984741210938 287.9593811035156 79.99984741210938 M 287.9594421386719 -6.103515625e-05 C 339.7105712890625 -6.103515625e-05 389.90478515625 38.3975830078125 463.1290283203125 111.6218566894531 C 607.3591918945313 255.8520202636719 609.8372192382813 317.4143676757813 463.1290283203125 464.1225280761719 C 390.4375610351563 536.8139038085938 337.9784851074219 572.2214965820313 286.3408508300781 572.2214965820313 C 233.7618103027344 572.2214965820313 182.0341186523438 535.528076171875 110.6285400390625 464.1225280761719 C -30.90411376953125 322.5896911621094 -42.72979736328125 264.9801940917969 110.6285400390625 111.6218566894531 C 186.1283264160156 36.1220703125 237.7761535644531 -6.103515625e-05 287.9594421386719 -6.103515625e-05 Z"
                  stroke="none"
                  fill="#106cd8"
                />
              </G>
            </G>
          </Svg>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Image
              style={styles.logo}
              source={require("./../assets/Logobig.png")}
            />
            <View style={styles.contentbox}>
              <View style={styles.topbar}>
                <View>
                  <Text style={styles.title}>Register</Text>
                  <View style={styles.titleul}></View>
                </View>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                  style={styles.nav}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.navtext}>Login</Text>
                  <Image
                    style={styles.navimage}
                    source={require("./../assets/login/download-square-arrow.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.input}>
                <Textinputcomp
                  icon={require("./../assets/icons/user.png")}
                  label="Your username"
                  placeholder="What we call you ?"
                  onchangetext={(val) => console.log(val)}
                />
              </View>
              <View style={styles.input}>
                <Textinputcomp
                  icon={require("./../assets/icons/role.png")}
                  label="Your role"
                  placeholder="Whats your role ?"
                  onchangetext={(val) => console.log(val)}
                />
              </View>
              <View style={styles.input}>
                <Textinputcomp
                  icon={require("./../assets/icons/email.png")}
                  label="Your email address"
                  placeholder="Enter your Email address"
                  onchangetext={(val) => console.log(val)}
                />
              </View>
              <View style={styles.input}>
                <Textinputcomp
                  icon={require("./../assets/icons/password.png")}
                  label="Password"
                  placeholder="Set a secure password"
                  onchangetext={(val) => console.log(val)}
                />
              </View>
              <View style={styles.input}>
                <Textinputcomp
                  icon={require("./../assets/icons/password.png")}
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  onchangetext={(val) => console.log(val)}
                />
              </View>
              <View style={styles.login}>
                <Button
                  title="Register"
                  iswhite={false}
                  onbuttonpress={() => navigation.navigate("Welcome")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFF",
    overflow: "hidden",
  },
  containerbg: {
    position: "absolute",
    marginLeft: -225,
    marginTop: -300,
  },
  content: {
    alignItems: "center",
  },
  logo: {
    width: 111,
    height: 53,
    resizeMode: "contain",
    marginTop: 56,
    marginBottom: 50,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#1170DF",
  },
  titleul: {
    width: 8,
    height: 2,
    backgroundColor: "#1170DF",
    position: "absolute",
    left: 0,
    bottom: -5,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
  },
  navtext: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#ABB7D0",
  },
  navimage: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    marginLeft: 12,
  },
  input: {
    marginBottom: 15,
  },
  login: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 50,
  },
});
