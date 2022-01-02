import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BoxShadow } from "react-native-shadow";
import Progressbar from "./progressbar";
export default function ProjectCard({
  title,
  icon,
  tasks,
  done,
  favpressed,
  teams,
  percentage,
  isopen,
  showfav,
  backgroundColor,
  teamshadowcolor,
  textcolor,
  style,
}) {
  const favbuttonshadow = {
    width: 16,
    height: 16,
    color: "#FB5185",
    border: 15,
    radius: 8,
    opacity: 0.6,
    x: 12,
    y: 12,
    style: {
      marginTop: -16,
      marginRight: 16,
    },
  };
  const membershadow = {
    width: 22,
    height: 22,
    color: teamshadowcolor ? teamshadowcolor : "#032B77",
    border: 10,
    radius: 11,
    opacity: 0.35,
    x: 10,
    y: 6,
  };
  const progress_percent =
    percentage && percentage >= 0 && percentage <= 100
      ? (100 - percentage) / 100
      : 1;
  const teamdata = teams ? teams : [];
  return (
    <View style={style}>
      <LinearGradient
        style={[styles.card, isopen ? styles.cardopen : {}]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.945, y: 1 }}
        colors={
          backgroundColor
            ? ["rgba(255,255,255,0)", "rgba(255,255,255,0)"]
            : ["#fff", "#fb5185"]
        }
        locations={[0, 1]}
      >
        <LinearGradient
          style={[styles.card, isopen ? styles.cardopen : {}]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.945, y: 1 }}
          colors={
            backgroundColor
              ? ["rgba(255,255,255,0)", "rgba(255,255,255,0)"]
              : ["#ff739d", "#1170df"]
          }
          locations={[0, 1]}
        >
          <LinearGradient
            style={styles.cardlayer}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.945, y: 1 }}
            colors={
              backgroundColor
                ? [backgroundColor, backgroundColor]
                : ["rgba(17, 112, 223,0.447)", "#1170df"]
            }
            locations={[0, 1]}
          >
            {!isopen ? <View style={styles.nub} /> : null}
            <View style={[styles.header, isopen ? styles.headeropen : {}]}>
              <Image style={styles.headericon} source={icon} />
              <Text style={[styles.title, , isopen ? styles.titleopen : {}]}>
                {title}
              </Text>
            </View>
            <View style={styles.body}>
              <View style={[styles.left, isopen ? styles.leftopen : {}]}>
                <View style={styles.info}>
                  <Image
                    style={styles.infoicon}
                    source={require("./../assets/icons/tasks.png")}
                  />
                  <Text
                    style={[
                      styles.infotitle,
                      textcolor ? { color: textcolor } : {},
                    ]}
                  >
                    {tasks} Tasks
                  </Text>
                </View>
                <View style={styles.info}>
                  <Image
                    style={styles.infoicon}
                    source={require("./../assets/icons/done.png")}
                  />
                  <Text
                    style={[
                      styles.infotitle,
                      textcolor ? { color: textcolor } : {},
                    ]}
                  >
                    {done} Done
                  </Text>
                </View>
              </View>
              <View style={[styles.right, isopen ? styles.rightopen : {}]}>
                {isopen ? (
                  <Progressbar
                    size={106}
                    strokeWidth={6}
                    progressPercent={percentage ? percentage : 0}
                    progressRemainSpace={7}
                    progressRemainPlace={78}
                    bgColor="#FFFFFF"
                    textSize={22}
                    textColor="#1170DF"
                    textfontFamily="BarlowCondensed-Medium"
                    isgradient={true}
                    text="DONE"
                  />
                ) : (
                  <LinearGradient
                    style={styles.progressbar}
                    start={{ x: 0.327, y: -0.114 }}
                    end={{ x: 0.5, y: 1.115 }}
                    colors={[
                      "rgba(3, 43, 119,0.698)",
                      "rgba(3, 43, 119,0.404)",
                      "#f12874",
                      "#f12874",
                    ]}
                    locations={[
                      0,
                      progress_percent,
                      progress_percent + 0.35,
                      1,
                    ]}
                  />
                )}
              </View>
            </View>
            <View style={[styles.team, isopen ? styles.teamopen : {}]}>
              <View style={styles.teamlist}>
                {teamdata.slice(0, 4).map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={index == 0 ? styles.firstmember : styles.member}
                    >
                      {index != 3 ? (
                        <BoxShadow setting={membershadow}>
                          <Image
                            style={styles.memberimage}
                            source={item.picture}
                          />
                        </BoxShadow>
                      ) : (
                        <Image
                          style={styles.memberimage}
                          source={item.picture}
                        />
                      )}
                    </View>
                  );
                })}
                {teamdata.length > 4 ? (
                  <View style={styles.more}>
                    <Text style={styles.moretext}>+{teamdata.length - 4}</Text>
                  </View>
                ) : null}
              </View>
              {showfav ? (
                <View style={[styles.fav, isopen ? styles.favfloat : {}]}>
                  <TouchableOpacity
                    onPress={() => {
                      favpressed();
                    }}
                    style={styles.favbutton}
                  >
                    <BoxShadow setting={favbuttonshadow}>
                      <LinearGradient
                        style={styles.favbutton}
                        start={{ x: 0.419, y: 0 }}
                        end={{ x: 0.673, y: 0.961 }}
                        colors={["#ffadc6", "#f12874"]}
                        locations={[0, 1]}
                      >
                        <Image
                          style={styles.favbuttonicon}
                          source={require("./../assets/icons/star.png")}
                        />
                      </LinearGradient>
                    </BoxShadow>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </LinearGradient>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 248,
    borderRadius: 20,
  },
  cardlayer: {
    height: 248,
    borderRadius: 20,
    flex: 1,
  },
  cardopen: {
    height: 176,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 21,
  },
  headeropen: {
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingBottom: 0,
  },
  title: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "white",
    marginLeft: 8,
  },
  titleopen: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#032B77",
    marginLeft: 8,
  },
  nub: {
    width: 14,
    height: 1,
    opacity: 0.4,
    backgroundColor: "white",
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  body: {
    flex: 2,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  right: {
    width: 20,
  },
  rightopen: {
    width: "auto",
  },
  left: {
    flex: 1,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
  },
  leftopen: {
    height: "auto",
  },
  progressbar: {
    width: 17,
    height: 100,
    borderRadius: 8,
    borderWidth: 3.5,
    borderColor: "rgba(255,255,255,0.08)",
  },
  info: {
    flexDirection: "row",
    marginVertical: 5,
  },
  infotitle: {
    fontSize: 16,
    fontFamily: "BarlowCondensed-Medium",
    color: "white",
    marginLeft: 7,
  },
  team: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  teamopen: {
    paddingBottom: 16,
  },
  teamlist: {
    flex: 1,
    flexDirection: "row",
  },
  member: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginLeft: -14,
    backgroundColor: "white",
  },
  firstmember: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  memberimage: {
    width: 32,
    height: 32,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 32,
  },
  more: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(255,255,255,0.8)",
    fontSize: 16,
    borderRadius: 32,
    marginLeft: -32,
    justifyContent: "center",
    alignItems: "center",
  },
  moretext: {
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#032B77",
  },
  favbutton: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  favfloat: {
    position: "absolute",
    top: -134,
    right: 0,
  },
  headericon: {
    width: 25,
    height: 21,
    resizeMode: "contain",
  },
  infoicon: {
    width: 16,
    height: 20,
    resizeMode: "contain",
  },
  favbuttonicon: {
    width: 16,
    height: 15,
    resizeMode: "contain",
  },
});
