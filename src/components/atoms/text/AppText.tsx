import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type PropsType = TextProps & {
  text: string;
  variant?: "heading" | "subheading" | "body" | "caption" | "small" | "xSmall";
  color?: string;
  style?: TextStyle;
  bold?: boolean;
  textAlign?: "auto" | "center" | "left" | "right";
  fontWeight?: "400" | "500" | "600" | "700" | "900";
};
export default function AppText({
  text,
  variant = "body",
  color,
  style,
  textAlign = "left",
  fontWeight = "400",
  bold,
}: PropsType) {
  return (
    <Text
      style={[
        styles[variant],
        {
          fontWeight: bold ? "800" : fontWeight,
          color: color,
          textAlign: textAlign,
        },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
  subheading: {
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },
  small: {
    fontSize: 10,
  },
  xSmall: {
    fontSize: 8,
  },
});
