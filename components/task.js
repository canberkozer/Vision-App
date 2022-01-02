import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
export default function Task({
  taskicon,
  title,
  label,
  labelicon,
  fromtime,
  totime,
  buttonicon,
  stared,
  onbuttonpress,
  id,
  teamlist,
  checklist,
  style,
}) {
  const [boxopen, setboxopen] = useState(false);
  const membershadow = {
    width: 22,
    height: 22,
    color: "#032B77",
    border: 10,
    radius: 11,
    opacity: 0.35,
    x: 10,
    y: 6,
    style: {
      marginRight: 10,
    },
  };
  const togglebox = () => {
    setboxopen(!boxopen);
  };
  const teamlistdata = teamlist ? teamlist : [];
  const checklistdata = checklist ? checklist : [];
  return (
    <View style={[styles.taskbox, style]}>
      <View style={styles.task}>
        <TouchableOpacity
          style={styles.taskinside}
          onPress={() => {
            togglebox();
          }}
        >
          <View style={styles.title}>
            <View style={styles.icon}>
              <Image style={styles.iconsize} source={taskicon} />
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{title}</Text>
              <View style={styles.labels}>
                <Image style={styles.labelicon} source={labelicon} />
                <Text style={styles.label}>{label}</Text>
              </View>
            </View>
          </View>
          {totime || fromtime ? <View style={styles.line}></View> : null}
          <View style={styles.schedule}>
            <Text style={styles.time}>{fromtime}</Text>
            <Text style={styles.to}>{totime && fromtime ? "T0" : ""}</Text>
            <Text style={styles.time}>{totime}</Text>
          </View>
          {stared ? (
            <View style={styles.star}>
              <Image
                style={styles.staricon}
                source={require("./../assets/icons/star_red.png")}
              />
            </View>
          ) : null}
        </TouchableOpacity>
        {buttonicon ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onbuttonpress(id);
            }}
          >
            <LinearGradient
              style={styles.buttonstyle}
              start={{ x: 0.608, y: 0 }}
              end={{ x: 0.302, y: 1 }}
              colors={["#add3ff", "#1170df"]}
              locations={[0, 1]}
            >
              <Image style={styles.buttonimg} source={buttonicon} />
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          false
        )}
      </View>
      {boxopen ? 
      <View style={styles.openbox}>
        <View style={styles.team}>
          {teamlistdata.length ? (
            <View style={styles.teamlabel}>
              <Image
                style={styles.teamlabelicon}
                source={require("./../assets/icons/teamicon.png")}
              />
              <Text style={styles.teamlabeltext}>Co-Workers:</Text>
            </View>
          ) : null}
          <View style={styles.teamlist}>
            {teamlistdata.map((item, index) => {
              return (
                <BoxShadow
                  key={index}
                  style={styles.memberimagesh}
                  setting={membershadow}
                >
                  <Image style={styles.memberimage} source={item} />
                </BoxShadow>
              );
            })}
          </View>
        </View>
        <View style={styles.works}>
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
      </View> : null }
    </View>
  );
}
const styles = StyleSheet.create({
  taskbox: {
    flexDirection: "column",
  },
  task: {
    height: 64,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 2,
  },
  taskinside: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
  },
  icon: {
    paddingRight: 9,
    paddingTop: 8,
    minWidth: 24,
    alignItems: "center",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
  },
  labelicon: {
    width: 15,
    height: 21,
    resizeMode: "contain",
    marginRight: 4,
  },
  label: {
    color: "#032B77",
    fontSize: 16,
    fontFamily: "BarlowCondensed-Regular",
  },
  text: {
    color: "#032B77",
    fontSize: 16,
    fontFamily: "BarlowCondensed-Medium",
    marginBottom: 5,
  },
  line: {
    width: 8,
    height: 2,
    backgroundColor: "#032B77",
    opacity: 0.2,
    marginHorizontal: 15,
  },
  schedule: {
    flex: 1,
    flexDirection: "row",
  },
  time: {
    fontSize: 18,
    color: "#F12874",
    fontFamily: "BarlowCondensed-Regular",
  },
  to: {
    fontSize: 18,
    color: "#032B77",
    fontFamily: "BarlowCondensed-Regular",
    opacity: 0.25,
    marginHorizontal: 10,
  },
  button: {
    position: "absolute",
    width: 33,
    height: 33,
    top: -10,
    right: 0,
    transform: [{ rotate: "45deg" }],
  },
  buttonstyle: {
    width: 33,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#F0F4FA",
    borderWidth: 3,
    borderRadius: 10,
  },
  buttonimg: {
    width: 12,
    height: 12,
    transform: [{ rotate: "-45deg" }],
  },
  member: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "white",
  },
  openbox: {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
    maxHeight: 500,
    padding: 20,
    paddingLeft: 40,
    marginTop: -12,
    zIndex: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  team: {
    flexDirection: "row",
  },
  teamlabel: {
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 16,
  },
  teamlabeltext: {
    color: "#ABB7D0",
    marginLeft: 8,
    fontSize: 16,
    fontFamily: "BarlowCondensed-Medium",
  },
  teamlist: {
    flex: 1,
    flexDirection: "row",
  },
  works: {
    marginTop: 10,
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
  iconsize: {
    width: 12,
    height: 10,
    resizeMode: "contain",
  },
  staricon: {
    width: 16,
    height: 15,
    resizeMode: "contain",
  },
  teamlabelicon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  memberimage: {
    width: 32,
    height: 32,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 32,
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
});
