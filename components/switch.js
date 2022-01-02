import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import PropTypes from "prop-types";

export default class Switch extends Component {
  static propTypes = {
    onValueChange: PropTypes.func,
  };

  static defaultProps = {
    onValueChange: () => null,
  };

  constructor() {
    super();

    this.state = {
      activeSwitch: 1,
      sbWidth: 100,
      sbHeight: 44,
      direction: "ltr",
      offsetX: new Animated.Value(0),
    };

    this._switchDirection = this._switchDirection.bind(this);
  }

  _switchDirection(direction) {
    let dir = "row";

    if (direction === "rtl") {
      dir = "row-reverse";
    } else {
      dir = "row";
    }
    return dir;
  }

  _switchThump(direction) {
    const { onValueChange, disabled } = this.props;
    let dirsign = 1;
    if (direction === "rtl") {
      dirsign = -1;
    } else {
      dirsign = 1;
    }

    if (this.state.activeSwitch === 1) {
      this.setState({ activeSwitch: 2 }, () =>
        onValueChange(this.state.activeSwitch)
      );

      Animated.timing(this.state.offsetX, {
        toValue:
          ((this.props.switchWidth || this.state.sbWidth) / 2 - 6) * dirsign +
          15,
        duration: this.props.switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    } else {
      this.setState({ activeSwitch: 1 }, () =>
        onValueChange(this.state.activeSwitch)
      );
      Animated.timing(this.state.offsetX, {
        toValue: 0,
        duration: this.props.switchSpeedChange || 100,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    return (
      <View style={switchStyles.switch}>
        <Text style={switchStyles.switchtitle}>
          {this.props.text ? this.props.text : "Small List"}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this._switchThump(
              this.props.switchdirection || this.state.direction
            );
          }}
        >
          <View
            style={[
              {
                width: this.props.switchWidth || this.state.sbWidth,
                height: this.props.switchHeight || this.state.sbHeight,
              },
            ]}
          >
            <View
              style={[
                switchStyles.switchbg,
                {
                  backgroundColor:
                    this.state.activeSwitch == 1
                      ? "#ABB7D0"
                      : this.props.switchBackgroundColor || "#1170DF",
                },
              ]}
            ></View>
            <View
              style={[
                {
                  flexDirection: this._switchDirection(
                    this.props.switchdirection || this.state.direction
                  ),
                },
              ]}
            >
              <Animated.View
                style={{ transform: [{ translateX: this.state.offsetX }] }}
              >
                <Image
                  style={switchStyles.switchbtn}
                  source={require("./../assets/icons/switch.png")}
                />
              </Animated.View>
            </View>
          </View>
        </TouchableOpacity>
        {this.props.children}
      </View>
    );
  }
}

const switchStyles = StyleSheet.create({
  switch: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  switchtitle: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#032B77",
    marginLeft: 5,
  },
  switchbg: {
    position: "absolute",
    width: "100%",
    height: 5,
    borderRadius: 11,
    backgroundColor: "#1170DF",
    top: "50%",
    marginTop: -2.5,
  },
  textPos: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "BarlowCondensed-Medium",
  },
  rtl: {
    flexDirection: "row-reverse",
  },
  ltr: {
    flexDirection: "row",
  },
  switchbtn: {
    width: 23,
    height: 24,
    resizeMode: "contain",
    marginLeft: -2,
  },
});
