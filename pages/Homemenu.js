import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {
  Svg,
  Image as SVGIMAGE,
  Defs,
  Path,
  G,
  ClipPath,
} from "react-native-svg";

export default function Homemenu({ navigation }) {
  const pressed = () => {
    console.log("pressed");
  };
  const hasnotification = false;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          pressed();
        }}
      >
        <View style={styles.avatar}>
          <View>
            <View style={styles.userbg} />
            {hasnotification === true ? (
              <View style={styles.usernotification} />
            ) : null}
            <Svg width="54" height="54" viewBox="0 0 130 129.997">
              <Defs>
                <ClipPath id="clip">
                  <Path
                    data-name="Path 68"
                    d="M20.263,20.445c28.089-28.089,38.147-26.417,64.565,0s26.871,37.693,0,64.565-38.641,25.923-64.565,0S-7.826,48.534,20.263,20.445Z"
                  />
                </ClipPath>
              </Defs>
              <G
                id="Group_3024"
                data-name="Group 3024"
                transform="translate(-134.087 -166.432)"
              >
                <G id="Avatar" transform="translate(134.087 166.432)">
                  <G
                    id="Group_8"
                    data-name="Group 8"
                    transform="translate(0 0)"
                  >
                    <SVGIMAGE
                      width="104"
                      height="104"
                      preserveAspectRatio="xMidYMid slice"
                      transform="translate(12.594 12.594)"
                      href={require("./../assets/dummypictures/picture3.png")}
                      clipPath="url(#clip)"
                    />
                    <G
                      id="Path_69"
                      data-name="Path 69"
                      transform="translate(0 0)"
                      fill="none"
                    >
                      <Path
                        d="M25.133,25.358c34.84-34.84,47.315-32.766,80.081,0s33.329,46.752,0,80.081-47.928,32.153-80.081,0S-9.707,60.2,25.133,25.358Z"
                        stroke="none"
                      />
                      <Path
                        d="M 65.41869354248047 1.999984741210938 C 62.78567504882812 1.999984741210938 60.15801239013672 2.470504760742188 57.38557434082031 3.438446044921875 C 54.58307647705078 4.4168701171875 51.68205261230469 5.885307312011719 48.51677703857422 7.927650451660156 C 42.50701141357422 11.80532836914062 35.52591705322266 17.79341125488281 26.54683685302734 26.77250671386719 C 17.49465179443359 35.82466888427734 11.47693634033203 42.92190551757812 7.608673095703125 49.10788726806641 C 5.598312377929688 52.32283020019531 4.1717529296875 55.27826690673828 3.247535705566406 58.14310455322266 C 2.336509704589844 60.96694946289062 1.931472778320312 63.65103149414062 2.009269714355469 66.34866333007812 C 2.1612548828125 71.61934661865234 4.169235229492188 76.95677185058594 8.3284912109375 83.14582824707031 C 12.09957122802734 88.75724792480469 17.71829223632812 95.19668579101562 26.54683685302734 104.0252075195312 C 35.14269256591797 112.6210632324219 41.88641357421875 118.3690643310547 47.76972961425781 122.1144866943359 C 50.92969512939453 124.1261672973633 53.85121154785156 125.576530456543 56.70123291015625 126.5484466552734 C 59.56023406982422 127.5234298706055 62.29147338867188 127.9973678588867 65.05099487304688 127.9973678588867 C 67.77549743652344 127.9973678588867 70.4798583984375 127.53564453125 73.31855773925781 126.5858306884766 C 76.17813110351562 125.6290283203125 79.10863494873047 124.1996307373047 82.27753448486328 122.2159271240234 C 88.35423278808594 118.4119720458984 95.1929931640625 112.6317443847656 103.7995300292969 104.0252075195312 C 112.5457305908203 95.27900695800781 118.3902359008789 88.40864562988281 122.192512512207 82.40380859375 C 124.2018966674805 79.23042297363281 125.6450958251953 76.30345153808594 126.6045761108398 73.45561218261719 C 127.5595550537109 70.62117004394531 128.0158538818359 67.92064666748047 127.9995727539062 65.19970703125 C 127.9833145141602 62.48497009277344 127.4968109130859 59.79161071777344 126.5122756958008 56.96572875976562 C 125.5283355712891 54.14157104492188 124.0659561157226 51.23788452148438 122.0415496826172 48.08880615234375 C 118.2663116455078 42.21614837646484 112.4697723388672 35.4427490234375 103.7995300292969 26.77250671386719 C 94.6826171875 17.65557098388672 88.07615661621094 11.89856719970703 82.37861633300781 8.105827331542969 C 76.12083435058594 3.940170288085938 70.731689453125 1.999984741210938 65.41869354248047 1.999984741210938 M 65.41869354248047 0 C 77.175537109375 0 88.57865905761719 8.723182678222656 105.213752746582 25.35829162597656 C 137.97998046875 58.12450408935547 138.5429382324219 72.11024475097656 105.213752746582 105.4394302368164 C 88.69969940185547 121.9534759521484 76.78203582763672 129.9973754882812 65.05098724365234 129.9973754882812 C 53.10607147216797 129.9973754882812 41.35456085205078 121.6613616943359 25.13261413574219 105.4394302368164 C -7.02081298828125 73.2860107421875 -9.707351684570312 60.19824981689453 25.13261413574219 25.35829162597656 C 42.28466796875 8.206230163574219 54.01804351806641 0 65.41869354248047 0 Z"
                        stroke="none"
                        fill="#f0f4fa"
                      />
                    </G>
                    <G
                      id="Path_77"
                      data-name="Path 77"
                      transform="translate(0 0)"
                      fill="none"
                    >
                      <Path
                        d="M25.133,25.358c34.84-34.84,47.315-32.766,80.081,0s33.329,46.752,0,80.081-47.928,32.153-80.081,0S-9.707,60.2,25.133,25.358Z"
                        stroke="none"
                      />
                      <Path
                        d="M 65.41869354248047 1.999984741210938 C 62.78567504882812 1.999984741210938 60.15801239013672 2.470504760742188 57.38557434082031 3.438446044921875 C 54.58307647705078 4.4168701171875 51.68205261230469 5.885307312011719 48.51677703857422 7.927650451660156 C 42.50701141357422 11.80532836914062 35.52591705322266 17.79341125488281 26.54683685302734 26.77250671386719 C 17.49465179443359 35.82466888427734 11.47693634033203 42.92190551757812 7.608673095703125 49.10788726806641 C 5.598312377929688 52.32283020019531 4.1717529296875 55.27826690673828 3.247535705566406 58.14310455322266 C 2.336509704589844 60.96694946289062 1.931472778320312 63.65103149414062 2.009269714355469 66.34866333007812 C 2.1612548828125 71.61934661865234 4.169235229492188 76.95677185058594 8.3284912109375 83.14582824707031 C 12.09957122802734 88.75724792480469 17.71829223632812 95.19668579101562 26.54683685302734 104.0252075195312 C 35.14269256591797 112.6210632324219 41.88641357421875 118.3690643310547 47.76972961425781 122.1144866943359 C 50.92969512939453 124.1261672973633 53.85121154785156 125.576530456543 56.70123291015625 126.5484466552734 C 59.56023406982422 127.5234298706055 62.29147338867188 127.9973678588867 65.05099487304688 127.9973678588867 C 67.77549743652344 127.9973678588867 70.4798583984375 127.53564453125 73.31855773925781 126.5858306884766 C 76.17813110351562 125.6290283203125 79.10863494873047 124.1996307373047 82.27753448486328 122.2159271240234 C 88.35423278808594 118.4119720458984 95.1929931640625 112.6317443847656 103.7995300292969 104.0252075195312 C 112.5457305908203 95.27900695800781 118.3902359008789 88.40864562988281 122.192512512207 82.40380859375 C 124.2018966674805 79.23042297363281 125.6450958251953 76.30345153808594 126.6045761108398 73.45561218261719 C 127.5595550537109 70.62117004394531 128.0158538818359 67.92064666748047 127.9995727539062 65.19970703125 C 127.9833145141602 62.48497009277344 127.4968109130859 59.79161071777344 126.5122756958008 56.96572875976562 C 125.5283355712891 54.14157104492188 124.0659561157226 51.23788452148438 122.0415496826172 48.08880615234375 C 118.2663116455078 42.21614837646484 112.4697723388672 35.4427490234375 103.7995300292969 26.77250671386719 C 94.6826171875 17.65557098388672 88.07615661621094 11.89856719970703 82.37861633300781 8.105827331542969 C 76.12083435058594 3.940170288085938 70.731689453125 1.999984741210938 65.41869354248047 1.999984741210938 M 65.41869354248047 0 C 77.175537109375 0 88.57865905761719 8.723182678222656 105.213752746582 25.35829162597656 C 137.97998046875 58.12450408935547 138.5429382324219 72.11024475097656 105.213752746582 105.4394302368164 C 88.69969940185547 121.9534759521484 76.78203582763672 129.9973754882812 65.05098724365234 129.9973754882812 C 53.10607147216797 129.9973754882812 41.35456085205078 121.6613616943359 25.13261413574219 105.4394302368164 C -7.02081298828125 73.2860107421875 -9.707351684570312 60.19824981689453 25.13261413574219 25.35829162597656 C 42.28466796875 8.206230163574219 54.01804351806641 0 65.41869354248047 0 Z"
                        stroke="none"
                        fill="#f0f4fa"
                      />
                    </G>
                  </G>
                </G>
              </G>
            </Svg>
          </View>
          <View style={styles.userinfo}>
            <Text style={styles.username}>Canberk Ozer</Text>
            <Text style={styles.usertitle}>Software Engineer</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/menu/Search.png")}
          />
          <Text style={styles.menutext}>Serach</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            navigation.navigate("Activity");
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/menu/Activity.png")}
          />
          <Text style={styles.menutext}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/menu/Trash.png")}
          />
          <Text style={styles.menutext}>Trash</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/menu/Profile.png")}
          />
          <Text style={styles.menutext}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu2}>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/pc.png")}
          />
          <Text style={styles.menutext}>Landing Page</Text>
          <View style={styles.notification} />
          <Image
            style={styles.menupin}
            source={require("./../assets/icons/menu/Pin.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.menuimage}
            source={require("./../assets/icons/mobile-phone.png")}
          />
          <Text style={styles.menutext}>Mobile Ui Kit</Text>
          <Image
            style={styles.menupin}
            source={require("./../assets/icons/menu/Pin.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.bottommenu}>
        <TouchableOpacity
          style={styles.bottommenuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.bottommenuimage}
            source={require("./../assets/icons/menu/Setting.png")}
          />
          <Text style={styles.bottommenutext}>Setting</Text>
          <View style={styles.bottommenuborder} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottommenuitem}
          onPress={() => {
            pressed();
          }}
        >
          <Image
            style={styles.bottommenuimage}
            source={require("./../assets/icons/menu/Logout.png")}
          />
          <Text style={styles.bottommenutext}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  menubg: {
    flex: 1,
  },
  avatar: {
    marginLeft: 15,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  userinfo: {
    paddingLeft: 10,
  },
  username: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "BarlowCondensed-SemiBold",
    marginBottom: 3,
  },
  usertitle: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "BarlowCondensed-Medium",
    opacity: 0.6,
  },
  menu: {
    width: 112,
    marginTop: 84,
    marginLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  menuitem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 29,
  },
  menuimage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  menutext: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    color: "#fff",
    paddingLeft: 16,
  },
  menu2: {
    marginTop: 20,
    paddingLeft: 16,
  },
  menupin: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginLeft: 26,
  },
  notification: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#F12874",
    marginLeft: 10,
    marginTop: -10,
  },
  spacer: {
    flex: 1,
  },
  bottommenu: {
    flexDirection: "row",
    paddingBottom: 45,
  },
  bottommenuitem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bottommenuimage: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  bottommenutext: {
    marginLeft: 11,
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
    color: "rgba(255,255,255,0.6)",
  },
  bottommenuborder: {
    position: "absolute",
    right: 0,
    top: "50%",
    marginTop: -4,
    width: 2,
    height: 8,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.34)",
  },
  userbg: {
    position: "absolute",
    width: 133,
    height: 133,
    borderWidth: 2,
    borderColor: "#F0F4FA",
    borderRadius: 45,
    top: -86,
    left: -86,
    opacity: 0.1,
    transform: [{ rotate: "45deg" }],
  },
  usernotification: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#F12874",
    right: 4,
    top: 8,
    zIndex: 9,
  },
});
