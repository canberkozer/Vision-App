import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { BoxShadow } from "react-native-shadow";
export default function Assign({
  members,
  onmemberPress,
  onaddmorePress,
  memberslimit,
  style,
}) {
  const membershadow = {
    width: 22,
    height: 22,
    color: "#032B77",
    border: 10,
    radius: 11,
    opacity: 0.35,
    x: 7,
    y: 7,
    style: {
      marginRight: 15,
    },
  };
  const membersdata = members ? members : [];
  return (
    <View style={[styles.assignbox, style]}>
      <View style={styles.title}>
        <Image
          style={styles.titleicon}
          source={require("./../assets/icons/user.png")}
        />
        <Text style={styles.label}>Assign</Text>
      </View>
      <View style={styles.list}>
        {membersdata.slice(0, memberslimit).map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                onmemberPress(item.id);
              }}
            >
              <BoxShadow setting={membershadow}>
                <Image style={styles.image} source={item.picture} />
              </BoxShadow>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => {
            onaddmorePress();
          }}
        >
          <View style={styles.addmore}>
            <Image
              style={styles.addmoreicon}
              source={require("./../assets/icons/plus.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  assignbox: {
    height: 132,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 17,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 20,
    color: "#ABB7D0",
    fontFamily: "BarlowCondensed-SemiBold",
  },
  list: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 37,
  },
  image: {
    width: 32,
    height: 32,
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 32,
  },
  addmore: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(171,183,208,0.2)",
    borderWidth: 1.5,
  },
  titleicon: {
    width: 12,
    height: 16,
    resizeMode: "contain",
  },
  addmoreicon: {
    width: 8,
    height: 8,
    resizeMode: "contain",
  },
});
