import React from "react";
import {ButtonProps} from "./button.props";
import {TouchableOpacity} from "react-native";
import {mergeAll, flatten} from "ramda";
import {textPresets, viewPresets} from "./button.presets";
import {Text} from "../text/text";

export function Button(props: ButtonProps) {
  const {
    preset = "primary",
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props;
  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]));
  const textStyle = mergeAll(flatten([textPresets[preset] || textPresets.primary, textStyleOverride]));

  const content = children || <Text tx={tx} text={text} style={textStyle} />;

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      {content}
    </TouchableOpacity>
  )
}
