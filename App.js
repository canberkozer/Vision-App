import React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
/* pages */
import Taskspage from "./pages/Tasks";
import Tasksfullviewpage from "./pages/Tasksfullview";
import Projectspage from "./pages/Projects";
import Projectsmalllistspage from "./pages/Projects_smalllist";
import Calendarpage from "./pages/Calendar";
import Timelinepage from "./pages/Timeline";
import Projectsdetailspage from "./pages/Projects_details";
import Profilepage from "./pages/Profile";
import Activitypage from "./pages/Activity";
import Homepage from "./pages/Home";
import Homeprojectpage from "./pages/Homeprojects";
import Loadingpage from "./pages/Loading";
import Slidespage from "./pages/Slides";
import Loginpage from "./pages/Login";
import Registerpage from "./pages/Register";
import Welcomepage from "./pages/Welcome";
import BNavigation from "./components/navigation";
enableScreens();

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false, // is fonts loaded
  };
  async loadFonts() {
    await Font.loadAsync({
      "BarlowCondensed-Black": {
        uri: require("./assets/fonts/BarlowCondensed-Black.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-Bold": {
        uri: require("./assets/fonts/BarlowCondensed-Bold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-ExtraBold": {
        uri: require("./assets/fonts/BarlowCondensed-ExtraBold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-ExtraLight": {
        uri: require("./assets/fonts/BarlowCondensed-ExtraLight.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-Light": {
        uri: require("./assets/fonts/BarlowCondensed-Light.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-Medium": {
        uri: require("./assets/fonts/BarlowCondensed-Medium.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-Regular": {
        uri: require("./assets/fonts/BarlowCondensed-Regular.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-SemiBold": {
        uri: require("./assets/fonts/BarlowCondensed-SemiBold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "BarlowCondensed-Thin": {
        uri: require("./assets/fonts/BarlowCondensed-Thin.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Slides"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Slides" component={Slidespage} />
          <Stack.Screen name="Welcome" component={Welcomepage} />
          <Stack.Screen name="Register" component={Registerpage} />
          <Stack.Screen name="Login" component={Loginpage} />
          <Stack.Screen name="Loading" component={Loadingpage} />
          <Stack.Screen name="Homeproject" component={Homeprojectpage} />
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Activity" component={Activitypage} />
          <Stack.Screen name="Profile" component={Profilepage} />
          <Stack.Screen
            name="Projectsdetails"
            component={Projectsdetailspage}
          />
          <Stack.Screen name="Timeline" component={Timelinepage} />
          <Stack.Screen name="Calendar" component={Calendarpage} />
          <Stack.Screen
            name="Projectsmalllists"
            component={Projectsmalllistspage}
          />
          <Stack.Screen name="Projects" component={Projectspage} />
          <Stack.Screen name="Tasksfullview" component={Tasksfullviewpage} />
          <Stack.Screen name="Tasks" component={Taskspage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
