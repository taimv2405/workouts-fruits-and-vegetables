// Võ Minh Tài - 23521382
import type { TextStyle } from "react-native";

export const colors = {
  primary: "#2196f3",
  onPrimary: "#ffffff",
  surface: "#ececf0",
  heading: "#1a1adb",
  onImage: "#ffffff",
  accent: "#e5181c",
} as const;

export const spacing = {
  sm: 8,
  md: 12,
  lg: 16,
} as const;

export const radius = {
  sm: 4,
  md: 14,
} as const;

export const typography = {
  body: { fontSize: 18 },
  bodyBold: { fontSize: 18, fontWeight: "bold" },
  button: { fontSize: 16, fontWeight: "500" },
  title: { fontSize: 20, fontWeight: "bold" },
} as const satisfies Record<string, TextStyle>;
