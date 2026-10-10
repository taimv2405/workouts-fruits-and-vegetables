// Võ Minh Tài - 23521382
import { Image, type ImageProps } from "expo-image";
import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/theme/tokens";

type ListSectionProps = {
  title: string;
  background: ImageProps["source"];
  children: ReactNode;
};

export default function ListSection({
  title,
  background,
  children,
}: ListSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.frame}>
        <Image
          source={background}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  title: {
    ...typography.title,
    paddingVertical: spacing.sm,
    textAlign: "center",
    color: colors.heading,
  },
  frame: {
    flex: 1,
    marginHorizontal: spacing.lg,
    overflow: "hidden",
  },
});
