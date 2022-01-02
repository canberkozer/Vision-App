import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import Topbar from "./../components/hometopbar";
import BNavigation from "./../components/navigation";
import Projectcard from "./../components/projectcard";
import { LinearGradient } from "expo-linear-gradient";
import Dropdown from "./../components/dropdown";
import Buttongroup from "./../components/buttongroup";
import { SwipeListView } from "react-native-swipe-list-view";
import Task from "./../components/task";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Homeprojects({ navigation }) {
  const pressed = () => {
    console.log("pressed");
  };
  const teammembers = [
    { id: 1, picture: require("./../assets/dummypictures/picture.png") },
    { id: 2, picture: require("./../assets/dummypictures/picture.png") },
    { id: 3, picture: require("./../assets/dummypictures/picture.png") },
    { id: 6, picture: require("./../assets/dummypictures/picture.png") },
  ];
  const dropdownitems2 = [
    { label: "Saturday", value: "Saturday" },
    { label: "Saturday", value: "Saturday2" },
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
  const activetab = "recent";
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
    <LinearGradient
      style={[styles.containerbg,{marginTop: insets.top,marginBottom:insets.bottom}]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1.287, y: 1.614 }} colors={['#1170df','#032b77']} locations={[0, 1]} >
      <Drawer
        ref={(ref) => drawer = ref}
        type="static"
        open={false}
        openDrawerOffset={160}
        content={<Homemenupage navigation={navigation} />}
        tapToClose={true}
        styles={{drawer:{
          borderRadius:20,
          overflow:'hidden'
        }}}
        tweenHandler={(ratio) => ({
            main: {
                transform: [
                    {scaleX: (1 - (0.15* ratio))},
                    {scaleY: (1 - (0.15* ratio))}
                ],
                borderRadius:20 * ratio,
                overflow:'hidden'
            }
        })}
        onClose={()=>(draweropen=false)}
      >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.toolbar}>
            <Topbar onAvatarPress={pressed} onMenuiconPress={ControlDrawerPanel} hasnotification={true} menuborder={false}/>
          </View>
            <View style={styles.body}>
              <View style={styles.tasks}>
                <View style={styles.tabs}>
                  <TouchableOpacity style={styles.tab}>
                    <Text style={[styles.tabtext,activetab == 'recent' ? styles.tabtextactive : {}]}>Recent</Text>
                    {activetab == 'recent' ? <View style={styles.tabactive}/> : null }
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tab}>
                    <Text style={[styles.tabtext,activetab == 'important' ? styles.tabtextactive : {}]}>Important</Text>
                    {activetab == 'important' ? <View style={styles.tabactive}/> : null }
                  </TouchableOpacity>
                </View>
                <View style={styles.taskscroll}>
                    <View style={styles.rightshadow}>
                        <LinearGradient
                            style={styles.rightshadowoverlay}
                            start={{ x: 1, y: 0.595 }}
                            end={{ x: 0, y: 0.596 }} colors={['rgba(255,255,255,1)','rgba(255,255,255,0)']} locations={[0, 1]} />
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={styles.taskslist}>
                          <View style={styles.taskitem}>
                            <Projectcard title="Landing Page" icon={require('./../assets/icons/mobile-phone.png')} tasks={12} done={4} favpressed={pressed} percentage={25} teams={teammembers} isopen={false} showfav={true} />
                          </View>
                          <View style={styles.taskitem}>
                            <Projectcard title="Mobile App" icon={require('./../assets/icons/pc.png')} tasks={21} done={18} favpressed={pressed} percentage={63} teams={teammembers} isopen={false} showfav={true}  />
                          </View>
                          <View style={styles.taskitem}>
                            <Projectcard title="Backend Development" icon={require('./../assets/icons/male-technologist.png')} tasks={20} done={10} favpressed={pressed} percentage={50} teams={teammembers} isopen={false} showfav={true}  />
                          </View>
                          <View style={styles.taskitem}>
                            <Projectcard title="New Offices" icon={require('./../assets/icons/map.png')} tasks={10} done={2} favpressed={pressed} percentage={20} teams={teammembers} isopen={false} showfav={true}  />
                          </View>
                        </View>
                    </ScrollView>
                 </View>
              </View>
              <View style={[styles.head,Platform.OS!='android' && {zIndex:10}]}>
                <View style={styles.headtitle}>
                  <Text style={styles.headtitlel1}>My</Text>
                  <Text style={styles.headtitlel2}>Day</Text>
                  <View style={styles.headtitleun} />
                </View>
                <View style={styles.headspacer} />
                <View style={styles.headropdown}>
                  <Dropdown title="Status" icon={require('./../assets/icons/calendar.png')} items={dropdownitems2} defaultvalue="Saturday" placeholder="select" onchangeitem={pressed} zindex={6000}/>
                </View>
              </View>
              <SwipeListView
                keyExtractor = { (item, index) => index.toString() }
                data={taskslist}
                scrollEnabled={false}
                renderItem={ (rowData, rowMap) => (
                  <View key={rowData.item.id} style={[styles.ltask,rowData.index == 0 ? styles.lfirsttask : {}]}>
                    <Task id={rowData.item.id} taskicon={rowData.item.icon} title={rowData.item.title} label={rowData.item.label} fromtime={rowData.item.fromtime} totime={rowData.item.totime} labelicon={rowData.item.labelicon} buttonicon={rowData.item.buttonicon} onbuttonpress={() => navigation.navigate('Projectsdetails')} stared={rowData.item.stared} teamlist={rowData.item.teamlist} checklist={rowData.item.checklist} />
                  </View>
                )}
                renderHiddenItem={ (data, rowMap) => (
                  <View style={[styles.ltaskactions,data.index == 0 ? styles.lfirsttask : {}]}>
                    <View  style={styles.ltaskactionleft}>
                      <Buttongroup onPress={pressed} color="#52E3B1" icon={require('./../assets/icons/finished.png')} label="DONE" id="done" />
                    </View>
                    <View style={styles.ltaskactionspace}/>
                    <View style={styles.ltaskactionright}>
                      <View style={styles.lactionbuttons}>
                        <Buttongroup onPress={pressed} color="#1170DF" icon={require('./../assets/icons/star.png')} id="star" />
                      </View>
                      <View style={styles.lactionbuttons}>
                        <Buttongroup onPress={pressed} color="#032B77" icon={require('./../assets/icons/pin.png')} id="pin" />
                      </View>
                      <View style={styles.lactionbuttons}>
                        <Buttongroup onPress={pressed} color="#F12874" icon={require('./../assets/icons/delete.png')} id="delete" />
                      </View>
                    </View>
                  </View>
                )}
                leftOpenValue={65}
                rightOpenValue={-193}
            />
            </View>
          </ScrollView>
        <View style={styles.navigation}>
          <BNavigation navigation={navigation} navigationPressed={pressed} activenavigation="home"/>
        </View>
      </View>
      </Drawer>
      </LinearGradient>
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
  },
  tasks: {
    flexDirection: "row",
  },
  taskscroll: {
    width: 100,
    flex: 1,
    paddingLeft: 24,
  },
  tabs: {
    width: 56,
    backgroundColor: "#F0F4FA",
    flexDirection: "column",
    borderBottomRightRadius: 35,
  },
  tab: {
    width: 70,
    flex: 1,
    justifyContent: "center",
    marginLeft: -14,
  },
  tabtext: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    transform: [{ rotate: "-90deg" }],
    color: "rgba(3,43,119,0.3)",
  },
  tabtextactive: {
    color: "#F12874",
  },
  tabactive: {
    position: "absolute",
    top: "50%",
    right: -19,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 23,
    borderRightWidth: 23,
    borderBottomWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    transform: [{ rotate: "-90deg" }],
  },
  taskslist: {
    flexDirection: "row",
  },
  taskitem: {
    width: 160,
    marginHorizontal: 8,
  },
  rightshadow: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    zIndex: 999,
  },
  rightshadowoverlay: {
    width: 39,
    height: "100%",
  },
  head: {
    width: "100%",
    flexDirection: "row",
    marginTop: 17,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headtitle: {
    flexDirection: "row",
  },
  headtitlel1: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "#1170DF",
    marginRight: 3,
  },
  headtitlel2: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Regular",
    color: "#1170DF",
  },
  headtitleun: {
    position: "absolute",
    width: 8,
    height: 2,
    backgroundColor: "#1170DF",
    bottom: -3,
  },
  headspacer: {
    flex: 1,
  },
  headropdown: {
    width: 180,
  },
  ltask: {
    marginHorizontal: 17,
    marginBottom: 25,
  },
  lfirsttask: {
    marginTop: 15,
  },
  ltaskactions: {
    height: 64,
    marginHorizontal: 17,
    marginBottom: 15,
    flexDirection: "row",
  },
  ltaskactionleft: {
    width: 56,
    height: 64,
  },
  ltaskactionspace: {
    flex: 1,
  },
  ltaskactionright: {
    width: 184,
    height: 64,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  lactionbutton: {
    width: 56,
    height: 64,
    backgroundColor: "#000",
    flexDirection: "column",
  },
  lactionbuttons: {
    width: 56,
    marginHorizontal: 4,
  },
});
