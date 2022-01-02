import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  InteractionManager,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Projectcard from "./../components/projectcard";
import Projectcardsimple from "../components/projectcardsimple";
import Topbar from "./../components/topbar";
import BNavigation from "./../components/navigation";
import Dropdown from "./../components/dropdown";
import Switch from "./../components/switch";
import SwitchButton from "./../components/switchbutton";
import Buttongroup from "./../components/buttongroup";
import { SwipeListView } from "react-native-swipe-list-view";
import { LinearGradient } from "expo-linear-gradient";
import Drawer from "react-native-drawer";
import Homemenupage from "./Homemenu";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Projects({ navigation }) {
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
      title: "Landing Page",
      icon: require("./../assets/icons/pc.png"),
      tasks: 21,
      done: 18,
      percentage: 5,
      backgroundColor: "#febcbe",
      teamlist: [
        { picture: require("./../assets/dummypictures/picture.png") },
        { picture: require("./../assets/dummypictures/coworker2.png") },
        { picture: require("./../assets/dummypictures/coworker3.png") },
        { picture: require("./../assets/dummypictures/coworker4.png") },
      ],
    },
    {
      id: 2,
      title: "Mobile App",
      icon: require("./../assets/icons/mobile-phone.png"),
      tasks: 21,
      done: 18,
      percentage: 63,
      backgroundColor: "#bcd4ff",
      teamlist: [
        { picture: require("./../assets/dummypictures/picture.png") },
        { picture: require("./../assets/dummypictures/coworker2.png") },
        { picture: require("./../assets/dummypictures/coworker3.png") },
        { picture: require("./../assets/dummypictures/coworker4.png") },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      icon: require("./../assets/icons/male-technologist.png"),
      tasks: 21,
      done: 18,
      percentage: 89,
      backgroundColor: "#febcbe",
      teamlist: [
        { picture: require("./../assets/dummypictures/picture.png") },
        { picture: require("./../assets/dummypictures/coworker2.png") },
        { picture: require("./../assets/dummypictures/coworker3.png") },
        { picture: require("./../assets/dummypictures/coworker4.png") },
      ],
    },
    {
      id: 4,
      title: "New Offices",
      icon: require("./../assets/icons/map.png"),
      tasks: 21,
      done: 18,
      percentage: 80,
      backgroundColor: "#febcbe",
      teamlist: [
        { picture: require("./../assets/dummypictures/picture.png") },
        { picture: require("./../assets/dummypictures/coworker2.png") },
        { picture: require("./../assets/dummypictures/coworker3.png") },
        { picture: require("./../assets/dummypictures/coworker4.png") },
      ],
    },
    {
      id: 5,
      title: "Documentation",
      icon: require("./../assets/icons/memo.png"),
      tasks: 21,
      done: 18,
      percentage: 100,
      backgroundColor: "#febcbe",
      teamlist: [
        { picture: require("./../assets/dummypictures/picture.png") },
        { picture: require("./../assets/dummypictures/coworker2.png") },
        { picture: require("./../assets/dummypictures/coworker3.png") },
        { picture: require("./../assets/dummypictures/coworker4.png") },
      ],
    },
  ];
  const dropdownitems2 = [
    { label: "Doing", value: "doing" },
    { label: "Doing2", value: "doing2" },
  ];
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
  const [isSmalllist, seSmalllist] = useState(false);
  const togglelistview = () => {
    if (!isSmalllist) {
      seSmalllist(true);
    } else {
      seSmalllist(false);
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
            <Topbar title="PROJECTS" onmenuPress={ControlDrawerPanel} onsearchPress={pressed} onplusPress={pressed} backgroundcolor="#FAFCFF"/>
          </View>
          <View style={styles.body}>
            <View style={styles.switch}>
              <SwitchButton onValueChange={(val) => console.log(val)} text1 = 'All' text2 = 'Importants' switchWidth = {200} switchHeight = {44} switchBorderRadius = {5} switchSpeedChange = {500} switchBorderColor = '#fff' btnBorderColor = '#ABB7D0' btnBackgroundColor = '#ABB7D0' fontColor = '#ABB7D0' btnfontFamily='BarlowCondensed-Medium' btnfontSize={20} />
            </View>
            <View style={[styles.actions,Platform.OS!='android' && {zIndex:10}]}>
              <View style={styles.switchbtn}>
                <Switch onValueChange={(val) =>
                            togglelistview()
                          }  switchWidth = {45} switchHeight = {16}  switchSpeedChange = {500} />
              </View>
              <View style={styles.dropdownbtn}>
                <Dropdown title="Status" icon={require('./../assets/icons/checkmark-done.png')} items={dropdownitems2} defaultvalue="doing" placeholder="select" onchangeitem={pressed} zindex={6000}/>
              </View>
            </View>
              <SwipeListView
                  keyExtractor = { (item, index) => index.toString() }
                  data={taskslist}
                  scrollEnabled={false}
                  style={styles.projectlist2}
                  renderItem={ (rowData, rowMap) => (
                    <TouchableOpacity activeOpacity={1.0} onPress={() => navigation.navigate('Projectsdetails')}>
                      {isSmalllist ? <Projectcardsimple
                          id={rowData.item.id}
                          title={rowData.item.title}
                          icon={rowData.item.icon}
                          progress={rowData.item.percentage}
                          onpress={pressed}
                          total="100"
                          style={styles.projectcard2}
                        /> : <Projectcard
                        key={rowData.item.id}
                        style={styles.projectcard2}
                        title={rowData.item.title}
                        icon={rowData.item.icon}
                        tasks={rowData.item.tasks}
                        done={rowData.item.done}
                        favpressed={pressed}
                        percentage={rowData.item.percentage}
                        isopen={true}
                        showfav={false}
                        backgroundColor={rowData.item.backgroundColor}
                        teams={rowData.item.teamlist}
                      />}
                    </TouchableOpacity>
                  )}
                  renderHiddenItem={ (data, rowMap) => (
                    <View style={[styles.taskactions2,isSmalllist && {height:64}]}>
                      <View style={[styles.taskactionleft,isSmalllist && {height:64}]}>
                        <Buttongroup onPress={pressed} color="#52E3B1" icon={require('./../assets/icons/finished.png')} label="DONE" id="done" />
                      </View>
                      <View style={styles.taskactionspace}/>
                      <View style={[styles.taskactionright,isSmalllist && {height:64}]}>
                        <View style={styles.actionbuttons}>
                          <Buttongroup onPress={pressed} color="#1170DF" icon={require('./../assets/icons/star.png')} id="star" />
                        </View>
                        <View style={styles.actionbuttons}>
                          <Buttongroup onPress={pressed} color="#032B77" icon={require('./../assets/icons/pin.png')} id="pin" />
                        </View>
                        <View style={styles.actionbuttons}>
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
    alignItems: "center",
  },
  switch: {
    marginBottom: 25,
  },
  projectlist: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },
  projectcard: {
    width: "100%",
  },
  projectlist2: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 17,
    marginTop: 20,
    marginBottom: 20,
  },
  projectcard2: {
    width: "100%",
    marginBottom: 15,
  },
  taskactions: {
    width: "100%",
    flexDirection: "row",
  },
  taskactions2: {
    width: "100%",
    flexDirection: "row",
    paddingRight: 35,
  },
  taskactionleft: {
    width: 56,
    height: 176,
  },
  taskactionspace: {
    flex: 1,
  },
  taskactionright: {
    width: 183,
    height: 176,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actionbutton: {
    width: 56,
    height: 64,
    backgroundColor: "#000",
    flexDirection: "column",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  dropdownbtn: {
    flex: 2,
  },
  switchbtn: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  actionbuttons: {
    width: 56,
    marginHorizontal: 4,
  },
});
