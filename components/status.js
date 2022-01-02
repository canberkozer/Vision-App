import React from "react";
import { StyleSheet, Image, Text, View, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
export default function Status({
  title,
  uncicon,
  icon,
  items,
  complete,
  defaultvalue,
  placeholder,
  onchangeitem,
  style,
  bgstyle,
  zIndex
}) {
  return (
    <View style={[styles.box, style]}>
      <View style={[styles.bg, !complete ? { backgroundColor: "#fff" } : {},bgstyle]} />
      <View style={styles.inside}>
        <View style={styles.title}>
          <Image style={styles.titleicon} source={!complete ? uncicon : icon} />
          <Text style={[styles.label, !complete ? { color: "#ABB7D0" } : {}]}>
            {title}
          </Text>
        </View>
        <View
          style={[
            styles.body,
            Platform.OS !== "android" && {
              zIndex: 10,
            },
          ]}
        >
          <DropDownPicker
            items={items ? items : []}
            defaultValue={defaultvalue ? defaultvalue : ""}
            containerStyle={styles.dropdowncontainer}
            style={!complete ? styles.dropdownwhite : styles.dropdown}
            itemStyle={styles.dropdownitemstyle}
            dropDownStyle={
              !complete ? styles.dropdownstylewhite : styles.dropdownstyle
            }
            labelStyle={
              !complete
                ? styles.dropdownlabelstylewhite
                : styles.dropdownlabelstyle
            }
            arrowStyle={{ marginRight: 5 }}
            placeholder={placeholder}
            zIndex={zIndex}
            customArrowUp={(size, color) => {
              return (
                <Image
                  style={styles.arrowicon}
                  source={
                    !complete
                      ? require("./../assets/icons/polyup.png")
                      : require("./../assets/icons/arrowup.png")
                  }
                />
              );
            }}
            customArrowDown={(size, color) => {
              return (
                <Image
                  style={styles.arrowicon}
                  source={
                    !complete
                      ? require("./../assets/icons/polydown.png")
                      : require("./../assets/icons/arrowdown.png")
                  }
                />
              );
            }}
            onChangeItem={(item) => onchangeitem(item)}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    height: 132,
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: 132,
    borderRadius: 16,
    right: 0,
    top: 0,
    backgroundColor: "#1170DE",
  },
  inside: {
    height: 132,
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
    color: "#fff",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  body: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  dropdowncontainer: {
    width: "100%",
  },
  dropdown: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "rgba(255,255,255,0.2)",
  },
  dropdownwhite: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "rgba(3,43,119,0.08)",
  },
  dropdownitemstyle: {
    justifyContent: "flex-start",
  },
  dropdownstyle: {
    backgroundColor: "#297fe2",
    borderColor: "#3a89e4",
  },
  dropdownstylewhite: {
    backgroundColor: "#fff",
    borderColor: "rgba(3,43,119,0.08)",
  },
  dropdownlabelstyle: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#fff",
  },
  dropdownlabelstylewhite: {
    fontSize: 18,
    fontFamily: "BarlowCondensed-Medium",
    color: "#032B77",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 2,
  },
  titleicon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  arrowicon: {
    width: 10,
    height: 7.5,
    resizeMode: "contain",
  },
});
