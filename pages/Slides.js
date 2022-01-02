import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  InteractionManager, ActivityIndicator
} from "react-native";
import {
  Svg,
  Defs,
  Path,
  G,
  Stop,
  LinearGradient,
  Line,
} from "react-native-svg";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Button from "./../components/button";
import { SafeAreaView } from "react-native-safe-area-context";
export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady : false,
      activeIndex: 0,
      carouselItems: [
        {
          title: "Plan your project.",
          image: require("./../assets/splash/Ideas-bro.png"),
        },
        {
          title: "Add tasks to your project.",
          image: require("./../assets/splash/board-bro.png"),
        },
        {
          title: "Work on your task with co-workers.",
          image: require("./../assets/splash/Co-workers-bro.png"),
        },
        {
          title: "Get a reminder before the tasks start.",
          image: require("./../assets/splash/Timeout-bro.png"),
        },
      ],
    };
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        isReady: true
      })
    });
  }
  _renderItem({ item, index }) {
    return (
      <View style={styles.item} key={index}>
        <Image style={styles.itemimage} source={item.image} />
        <Text style={styles.itemtext}>{item.title}</Text>
      </View>
    );
  }
  get pagination() {
    const { carouselItems, activeIndex } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop: 23 }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 6,
          marginHorizontal: 8,
          backgroundColor: "#E7EAF4",
          borderWidth: 3,
          borderColor: "rgba(17,112,223,0.1)",
        }}
        inactiveDotStyle={{
          borderColor: "#FAFCFF",
        }}
        dotContainerStyle={{
          width: 2,
          transform: [{ rotate: "45deg" }],
        }}
        dotColor="#1170DF"
        inactiveDotColor="#E7EAF4"
        inactiveDotScale={1}
        inactiveDotOpacity={1}
      />
    );
  }
  render() {
    const { carouselItems, activeIndex } = this.state;
    if(!this.state.isReady){
      return <View style={{flex: 1,backgroundColor: "#FAFCFF",justifyContent: "center"}}><ActivityIndicator size="large" color="#1170DF" /></View>
    }
    return (
      <View style={styles.container}>
        <SafeAreaView mode="margin" style={styles.container}>
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
              <Carousel
                layout={"tinder"}
                ref={(ref) => (this.carousel = ref)}
                data={this.state.carouselItems}
                sliderWidth={350}
                itemWidth={350}
                renderItem={this._renderItem}
                ayoutCardOffset={9}
                onSnapToItem={(index) => this.setState({ activeIndex: index })}
              />
              {this.pagination}
              <View style={styles.button}>
                {activeIndex != carouselItems.length - 1 ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.carousel.snapToNext();
                    }}
                  >
                    <Svg
                      id="Bottom_Buttons"
                      data-name="Bottom Buttons"
                      width="52.024"
                      height="52.023"
                      viewBox="0 0 52.024 52.023"
                    >
                      <Defs>
                        <LinearGradient
                          id="linear-gradient"
                          x1="0.392"
                          x2="0.698"
                          y2="1"
                          gradientUnits="objectBoundingBox"
                        >
                          <Stop offset="0" stopColor="#add3ff" />
                          <Stop offset="1" stopColor="#1170df" />
                        </LinearGradient>
                      </Defs>
                      <G
                        id="Group_66"
                        data-name="Group 66"
                        transform="translate(-161 -683.045)"
                      >
                        <G
                          id="Group_8"
                          data-name="Group 8"
                          transform="translate(-149.368 636.635)"
                        >
                          <Path
                            id="Path_68"
                            data-name="Path 68"
                            d="M10.058,10.148C24-3.794,28.992-2.965,42.1,10.148s13.338,18.709,0,32.047-19.18,12.867-32.047,0S-3.885,24.09,10.058,10.148Z"
                            transform="translate(310.368 46.409)"
                            fill="url(#linear-gradient)"
                          />
                        </G>
                        <G
                          id="Arrow_Icon"
                          data-name="Arrow Icon"
                          transform="translate(167 723) rotate(-90)"
                        >
                          <Path
                            id="Path_376"
                            data-name="Path 376"
                            d="M10,14l4,4,4-4"
                            transform="translate(0 6)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                          <Line
                            id="Line_29"
                            data-name="Line 29"
                            y1="8"
                            transform="translate(14 16)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          />
                        </G>
                      </G>
                    </Svg>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.loginbox}>
                    <Text style={styles.loginboxtitle}>Let’s Do it!</Text>
                    <View style={styles.row}>
                      <View style={styles.btn}>
                        <Button
                          title="Register"
                          iswhite={true}
                          onbuttonpress={() =>
                            this.props.navigation.navigate("Register")
                          }
                        />
                      </View>
                      <View style={styles.btn}>
                        <Button
                          title="Login"
                          iswhite={false}
                          onbuttonpress={() =>
                            this.props.navigation.navigate("Login")
                          }
                        />
                      </View>
                    </View>
                    
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
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
  item: {
    backgroundColor: "#FAFCFF",
  },
  itemimage: {
    width: 270,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
  },
  itemtext: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    color: "#032B77",
    marginTop: 50,
    textAlign: "center",
  },
  button: {
    marginTop: 25,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row-reverse",
  },
  loginbox: {
    marginTop: -20,
  },
  loginboxtitle: {
    fontFamily: "BarlowCondensed-Bold",
    fontSize: 20,
    color: "#1170DF",
    textAlign: "center",
    marginBottom: 28,
  },
  btn: {
    marginHorizontal: 12,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
  loginoption: {
    marginHorizontal: -10,
  },
  loginoptionimage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
