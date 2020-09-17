import {TextStyle} from "react-native";
import {color, typography} from "../../theme";

// TODO 参照标准的 typography 设计系统设计。
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.textDark,
  fontSize: 15,
};

export const presets = {
  /**
   * 默认文字样式。
   */
  default: BASE,

  /**
   * 默认文字加粗。
   */
  bold: {...BASE, fontWeight: "bold"} as TextStyle,

  /**
   * 标题（header)
   */
  header: {...BASE, fontSize: 24, fontWeight: "bold"} as TextStyle,

  /**
   * 字段标签( 输入框前面的标签)
   */
  fieldLabel: {...BASE, fontSize: 13, color: color.textDark} as TextStyle, // TODO 文字颜色待更细致区分

};

export type TextPresets = keyof typeof presets;
