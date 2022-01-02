import React from "react";
import { View, Platform } from "react-native";
import {
  Svg,
  Circle,
  Text as SVGText,
  Image,
  Defs,
  Stop,
  LinearGradient,
  TSpan,
  G,
} from "react-native-svg";
export default function Progressbar({
  size,
  strokeWidth,
  text,
  progressPercent,
  progressRemainSpace,
  progressRemainPlace,
  bgColor,
  pgColor,
  textSize,
  textColor,
  textfontFamily,
  isgradient,
  style,
}) {
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;
  const space = 15;
  return (
    <View style={style}>
      <Svg width={size} height={size}>
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1="0.5"
            y1="-0.255"
            x2="0.195"
            y2="0.978"
            gradientUnits="objectBoundingBox"
            gradientTransform="rotate(-90,50,1)"
          >
            <Stop offset="1" stopColor="#f12874" />
            <Stop offset="0.437" stopColor="#1170df" />
            <Stop offset="0" stopColor="#1170df" />
          </LinearGradient>
        </Defs>
        {/* Progress Circle */}
        <Circle
          stroke={
            pgColor && !isgradient
              ? pgColor
              : isgradient
              ? "url(#linear-gradient)"
              : "#3b5998"
          }
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />
        {/* Progress remain Circle */}
        {progressPercent <= 90 ? (
          <Circle
            stroke={bgColor ? bgColor : "#000"}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={
              radius *
              Math.PI *
              2 *
              ((progressPercent && progressRemainSpace
                ? progressPercent + progressRemainSpace
                : 0) /
                100)
            }
            strokeLinecap="round"
            transform={`rotate(${
              progressPercent && progressRemainPlace
                ? (progressPercent * 360) / 100 - progressRemainPlace
                : 0
            }, ${size / 2}, ${size / 2})`}
            {...{ strokeWidth }}
          />
        ) : null}
        {!isgradient && progressPercent == 100 ? (
          <Image
            x="50%"
            y="50%"
            width="15"
            height="9"
            preserveAspectRatio="xMidYMid slice"
            href={require("./../assets/icons/finished.png")}
            clipPath="url(#clip)"
            transform={`translate(-7.5,-4.5)`}
          />
        ) : text ? (
          <G 
          x={size / 2}
          y={size / 2 + (textSize ? 0 : 5)}>
            <SVGText
              fill="#1170df"
              fontSize="22"
              fontFamily={Platform.OS != "ios" && "BarlowCondensed-Medium"}
              fontWeight="500"
              textAnchor="middle"
            >
              <TSpan x="0" y="0">
                <TSpan>
                  {progressPercent ? progressPercent : "0"}
                </TSpan>
                <TSpan
                  dx={progressPercent >=10 && progressPercent <100 ? "-0.5%" : (progressPercent == 100  ? "-6%" : '4%')}
                  y="0"
                  fontSize="12.833"
                  fontFamily={Platform.OS != "ios" && "BarlowCondensed-Black"}
                  fontWeight="800"
                  baselineShift="7.332599794233149"
                  textAnchor="end"
                >
                  %
                </TSpan>
              </TSpan>
              <TSpan
                x="0"
                dy="20"
                fill="#1170df"
                fontSize="16"
                fontFamily={Platform.OS != "ios" && "BarlowCondensed-Medium"}
                fontWeight="500"
                opacity="0.3"
              >
                  {text}
              </TSpan>
            </SVGText>
            
          </G>
        ) : (
          <SVGText
            fontSize={textSize ? textSize : "10"}
            fontFamily={
              textfontFamily
                ? textfontFamily
                : Platform.OS != "ios" && "BarlowCondensed-Bold"
            }
            x={size / 2}
            y={size / 2 + (textSize ? textSize / 2 - 1 : 5)}
            textAnchor="middle"
            fill={textColor ? textColor : "#ffff"}
            fontWeight="500"
          >
            {progressPercent ? progressPercent + "%" : "0%"}
          </SVGText>
        )}
      </Svg>
    </View>
  );
}
