import {ViewStyle, TextStyle, View} from "react-native";
import {color, spacing} from "../../theme";

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing.tiny,
  paddingHorizontal: spacing.tiny,
  borderRadius: spacing.tiny,
  justifyContent: "center",
  alignItems: "center",
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing.small,
};

export const viewPresets = {
  primary:{...BASE_VIEW, backgroundColor: color.primary} as ViewStyle,
  secondary: {...BASE_VIEW, backgroundColor: color.white} as ViewStyle,
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems:"flex-start",
  } as ViewStyle,
};

export const textPresets = {
  primary: {...BASE_TEXT, color: color.textLight} as TextStyle,
  secondary: {...BASE_TEXT, color: color.textDark} as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.textDark,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
};

export type ButtonPresetNames =keyof typeof viewPresets;

