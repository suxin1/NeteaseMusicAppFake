import {ViewStyle, TextStyle, TouchableOpacityProps} from "react-native";
import {ButtonPresetNames} from "./button.presets";

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * 从 i18n 中查到的文本。
   */
  tx?: string,
  /**
   * 未使用 `tx` 和子组件时显示的文本。
   */
  text?: string,
  /**
   * 按钮 viewStyle 重载。
   */
  style?: ViewStyle | ViewStyle[],
  /**
   * 按钮 textStyle 重载。
   */
  textStyle?: TextStyle | TextStyle[],
  /**
   * 预设的不同类型的按钮类型。
   */
  preset?: ButtonPresetNames,
  /**
   * 嵌套的子组件。
   */
  children?: React.ReactNode,
}
