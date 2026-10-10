// Võ Minh Tài - 23521382
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/theme/tokens";

type SectionHeaderProps = {
  title: string;
  iconUrl: string;
};

export default function SectionHeader({ title, iconUrl }: SectionHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} accessible={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  title: {
    ...typography.title,
    color: colors.onImage,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
