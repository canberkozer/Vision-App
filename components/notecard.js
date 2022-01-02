import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Notecard({
  labelicon,
  title,
  buttonicon,
  ondeletepress,
  onbuttonpress,
  message,
  avatar,
  onNextpress,
  onPrevpress,
  currentnote,
  totalnotes,
  complete,
  style,
}) {
  const buttonshadow = {
    width: 27,
    height: 27,
    color: "#1170DF",
    border: 10,
    radius: 13.5,
    opacity: 0.15,
    x: 6,
    y: 7,
  };
  const avatarshadow = {
    width: 22,
    height: 22,
    color: "#032B77",
    border: 10,
    radius: 11,
    opacity: 0.15,
    x: 6,
    y: 7,
    style: {
      marginTop: -10,
      marginRight: 10,
    },
  };
  return (
    <View
      style={[
        styles.card,
        !complete ? { backgroundColor: "rgba(171,183,208,0.1)" } : {},
        style,
      ]}
    >
      <View style={styles.cardtop}>
        <View style={styles.title}>
          <Image style={styles.labelicon} source={labelicon} />
          <Text style={styles.titletext}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ondeletepress();
          }}
        >
          <Image
            style={styles.buttondelete}
            source={require("./../assets/icons/delete_red.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: -10 }]}
          onPress={() => {
            onbuttonpress();
          }}
        >
          <BoxShadow setting={buttonshadow}>
            <LinearGradient
              style={[
                styles.buttonstyle,
                Platform.OS == "ios"
                  ? { width: 40, height: 40, borderRadius: 30 }
                  : {},
              ]}
              start={{ x: 0.795, y: 0.918 }}
              end={{ x: -0.483, y: -0.925 }}
              colors={["#1170df", "#1170df", "#f12874"]}
              locations={[0, 0.231, 1]}
            >
              <Image style={styles.buttonicon} source={buttonicon} />
            </LinearGradient>
          </BoxShadow>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View>
          <BoxShadow setting={avatarshadow}>
            <Image style={styles.avatar} source={avatar} />
          </BoxShadow>
        </View>
        <View style={styles.notes}>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.navigation}>
        <View style={styles.navigationbuttons}>
          <TouchableOpacity
            onPress={() => {
              onNextpress();
            }}
          >
            <Image
              style={styles.navigationbutton}
              source={require("./../assets/icons/arrow_left.png")}
            />
          </TouchableOpacity>
          <Text style={styles.notecount}>
            <Text style={styles.currentnote}>{currentnote}</Text>/{totalnotes}
          </Text>
          <TouchableOpacity
            onPress={() => {
              onPrevpress();
            }}
          >
            <Image
              style={styles.navigationbutton}
              source={require("./../assets/icons/arrow_right.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 16,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titletext: {
    color: "#ABB7D0",
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    marginLeft: 20,
    marginTop: -3,
  },
  cardtop: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonstyle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 32,
  },
  notes: {
    flex: 1,
    height: 40,
  },
  message: {
    fontFamily: "BarlowCondensed-Regular",
    fontSize: 16,
    color: "#032B77",
    marginLeft: 10,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  navigationbuttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notecount: {
    width: 50,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#ABB7D0",
  },
  currentnote: {
    color: "#032B77",
  },
  labelicon: {
    width: 16,
    height: 14,
    resizeMode: "contain",
  },
  buttondelete: {
    width: 16,
    height: 17,
    resizeMode: "contain",
  },
  buttonicon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  navigationbutton: {
    width: 5,
    height: 10,
    resizeMode: "contain",
  },
});
