import {TextStyle, TextProps as TextProperties} from "react-native";
import {TextPresets} from "./text.presets";

export interface TextProps extends TextProperties {
  /**
   * 子组件
   */
  children?: React.ReactNode,

  /**
   * 从 i18n 中查到的文本。
   */
  tx?: string,

  /**
   * 未使用 `tx` 和子组件时显示的文本。
   */
  text?: string,

  /**
   * 传递到 i18n 的可选 options。
   */
  txOptions?: object,

  /**
   * 文本样式重载。
   */
  style?: TextStyle | TextStyle[],

  /**
   * 预设文本样式。
   */
  preset?: TextPresets,
}

