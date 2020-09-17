import React from "react";
import {Text as ReactNativeText} from "react-native";
import {presets} from "./text.presets";
import {TextProps} from "./text.props";
import {mergeAll, flatten} from "ramda";


export function Text(props: TextProps) {
  const {
    preset = "default",
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  const style = mergeAll(flatten([presets[preset] || presets.default, styleOverride]));
  return (
    <ReactNativeText {...rest} style={style}>
      {children}
    </ReactNativeText>
  )
}
