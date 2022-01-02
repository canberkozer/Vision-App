import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
export default function Progresschart({
  title,
  icon,
  chartlabels,
  chartdata,
  style,
}) {
  const [boxwidth, setboxwidth] = useState(0);
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    fillShadowGradient: "#1170DF",
    fillShadowGradientOpacity: 0.22,
    color: (opacity = 1) => `rgba(17, 12, 223, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 1,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#1170DF",
      fill: "#fff",
    },
    propsForLabels: {
      fill: "#ABB7D0",
    },
    style: {
      borderRadius: 16,
    },
  };
  const data = {
    labels: chartlabels ? chartlabels : [],
    datasets: [
      {
        data: chartdata ? chartdata : [],
        color: (opacity = 1) => `#1170DF`, // optional
        strokeWidth: 3, // optional
      },
    ],
  };
  const pointclick = (value, dataset, getColor) => {
    settooltipleft(value.x);
    settooltiptop(value.y);
    settooltipdata(value.value);
    setcharttouched(true);
  };
  return (
    <View
      style={[styles.box, style]}
      onLayout={(event) => {
        var { width } = event.nativeEvent.layout;
        setboxwidth(width);
      }}
    >
      <View style={styles.title}>
        <Image style={styles.titleicon} source={icon} />
        <Text style={styles.label}>{title}</Text>
      </View>
      <View>
        <View style={styles.chartlabels}>
          {data.labels.map((label, index) => {
            return (
              <Text key={index} style={styles.chartlabel}>
                {label}
              </Text>
            );
          })}
        </View>
        <View style={styles.chart}>
          <LineChart
            data={data}
            width={boxwidth}
            height={118}
            style={{
              borderBottomRightRadius: 0,
              paddingRight: 0,
              marginLeft: 40,
            }}
            yAxisLabel=""
            yAxisSuffix=""
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            withInnerLines={false}
            withOuterLines={false}
            withHorizontalLabels={false}
            withVerticalLabels={false}
            fromZero={true}
            onDataPointClick={pointclick}
            bezier
          />
        </View>
        <View style={styles.chartoverlayright}>
          <LinearGradient
            style={styles.chartoverlay}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
            locations={[0, 1]}
          />
        </View>
        <View style={styles.chartoverlayleft}>
          <LinearGradient
            style={styles.chartoverlay}
            start={{ x: 1, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
            locations={[0, 1]}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    height: 186,
    paddingTop: 19,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    color: "#ABB7D0",
    marginLeft: 10,
    fontFamily: "BarlowCondensed-SemiBold",
  },
  chartoverlay: {
    width: 58,
    height: 120,
  },
  chartoverlayright: {
    position: "absolute",
    right: 10,
  },
  chartoverlayleft: {
    position: "absolute",
    left: 10,
  },
  chartlabels: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    zIndex: 2,
  },
  chartlabel: {
    fontSize: 14,
    fontFamily: "BarlowCondensed-SemiBold",
    color: "rgba(3,43,119,0.15)",
  },
  tooltip: {
    position: "absolute",
    backgroundColor: "#1170DF",
    width: 31,
    height: 21,
    alignItems: "center",
    borderRadius: 5,
    zIndex: 2,
    marginLeft: -36,
    marginTop: -15,
  },
  tooltiptext: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "BarlowCondensed-SemiBold",
  },
  tooltipshape: {
    position: "absolute",
    width: 0,
    height: 0,
    borderColor: "transparent",
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 4,
    borderTopColor: "#1170DF",
    bottom: -4,
  },
  titleicon: {
    width: 17,
    height: 17,
    resizeMode: "contain",
  },
  chart: {},
});
